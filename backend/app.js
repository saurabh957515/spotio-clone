const express = require("express");
const connectToMongoDB = require("./db/connectToMongoDB");
const Lead = require("./models/Lead");
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
let Supercluster;
app.use(express.static(path.join(__dirname, 'spotio-clone/dist')));
(async () => {
  const module = await import("supercluster");
  Supercluster = module.default; // Ensure you're accessing the default export
})();

app.get("/api/getby", async (req, res) => {
  const { minLat, maxLat, minLon, maxLon, zoomLevel } = req?.query;
  await getLeadsInBoundingBox(minLat, maxLat, minLon, maxLon, zoomLevel)
    .then((leads) => {
      res.json(leads);
    })
    .catch((err) => {
      console.error(err);
    });
});
app.post("/leads", async (req, res) => {
  try {
    const leadId = await Lead.create(req.body);
    res.status(201).json({ message: "Lead created", leadId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/leads", async (req, res) => {
  try {
    const leads = await Lead.find(req.query);
    res.status(200).json(leads);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
async function importData() {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("leads");
    let totalRowsProcessed = 0;
    const leads = [];
    const filePath = path.join(__dirname, "leads.csv");
    console.log(filePath, __dirname);
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        totalRowsProcessed++;
        const longitude = parseFloat(row._15);
        const latitude = parseFloat(row._16);

        if (isNaN(longitude) || isNaN(latitude)) {
          console.log(`Skipping invalid entry: ${JSON.stringify(row)}`);
          return;
        }
        const lead = {
          address: row._8 || null,
          zipcode: row._12 || null,
          state: row._13 || null,
          country: row._14 || null,
          longitude: row._15 || null,
          latitude: row._16 || null,
          stageId: row.stageId || null,
          geo: {
            type: "Point",
            coordinates: [
              parseFloat(row._15 || "0"),
              parseFloat(row._16 || "0"),
            ],
          },
        };
        leads.push(lead);

        console.log("leads", leads.length, totalRowsProcessed);
        if (leads.length >= 1000) {
          collection.insertMany(leads);
          leads.length = 0;
        }
      })
      .on("end", async () => {
        if (leads.length > 0) {
          await collection.insertMany(leads);
        }
        console.log("Data import completed!");
      })
      .on("error", (error) => {
        console.error("Error reading the CSV file:", error);
      });
  } catch (error) {
    console.error("Error importing data:", error);
  }
}
let currentAbortController = null; // Track the latest AbortController

async function getLeadsInBoundingBox(
  minLat,
  maxLat,
  minLon,
  maxLon,
  zoomLevel
) {
  // Cancel the previous request if it exists
  if (currentAbortController) {
    currentAbortController.abort();
  }

  // Create a new AbortController for this request
  currentAbortController = new AbortController();
  const signal = currentAbortController.signal;

  try {
    async function divideBoundingBoxAndAggregate(
      collection,
      minLat,
      minLon,
      maxLat,
      maxLon,
      signal
    ) {
      const divisions = 4;
      const latStep = (parseFloat(maxLat) - parseFloat(minLat)) / divisions;
      const lonStep = (parseFloat(maxLon) - parseFloat(minLon)) / divisions;
      const results = [];

      for (let i = 0; i < divisions; i++) {
        for (let j = 0; j < divisions; j++) {
          if (signal.aborted) {
            throw new Error("Request was aborted");
          }

          const subMinLat = parseFloat(minLat) + i * parseFloat(latStep);
          const subMaxLat = parseFloat(subMinLat) + parseFloat(latStep);
          const subMinLon = parseFloat(minLon) + j * parseFloat(lonStep);
          const subMaxLon = parseFloat(subMinLon) + parseFloat(lonStep);
          const boundingBox = [
            [parseFloat(subMinLon), parseFloat(subMinLat)], // Southwest corner
            [parseFloat(subMaxLon), parseFloat(subMaxLat)], // Northeast corner
          ];

          const aggregationPipeline = [
            {
              $match: {
                geo: {
                  $geoWithin: {
                    $box: boundingBox,
                  },
                },
                "geo.coordinates": { $exists: true, $ne: null }, // Ensure coordinates exist
              },
            },
            {
              $group: {
                _id: null,
                count: { $sum: 1 }, // Count the number of documents in the sub-box
                centerLat: { $avg: { $arrayElemAt: ["$geo.coordinates", 1] } }, // Average latitude
                centerLon: { $avg: { $arrayElemAt: ["$geo.coordinates", 0] } }, // Average longitude
              },
            },
          ];

          results.push(
            collection
              .aggregate(aggregationPipeline)
              .toArray()
              .then((result) => {
                if (result.length > 0) {
                  return {
                    boundingBox,
                    center: {
                      lat: result[0].centerLat,
                      lon: result[0].centerLon,
                    },
                    count: result[0].count,
                  };
                }
                return null;
              })
          );
          if (signal.aborted) {
            throw new Error("Request was aborted");
          }
        }
      }
      const response = await Promise.all(results);
      return response?.filter((res) => res);
    }

    const db = await connectToMongoDB();
    const collection = db.collection("leads");

    const query = {
      geo: {
        $geoWithin: {
          $box: [
            [parseFloat(minLon), parseFloat(minLat)], // Southwest corner
            [parseFloat(maxLon), parseFloat(maxLat)], // Northeast corner
          ],
        },
      },
    };

    const result = await divideBoundingBoxAndAggregate(
      collection,
      minLat,
      minLon,
      maxLat,
      maxLon,
      signal
    );
    return result;
  } catch (err) {
    if (err.message === "Request was aborted") {
      console.warn("Request was canceled:", err);
    } else {
      console.error("Error retrieving leads within bounding box:", err);
    }
  }
}

const minLng = -83.8710725441986;
const minLat = 33.28047556980069;
const maxLng = -75.41159988795084;
const maxLat = 39.42387792384459;

// minLat: 33.28047556980069
// maxLat: 39.42387792384459
// minLon: -83.8710725441986
// maxLon: -75.41159988795084
// getLeadsInBoundingBox(minLng, minLat, maxLng, maxLat)
//   .then((leads) => {
//     console.log(leads); // Print or handle the leads data
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// importData();
// Start the server
app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server running on http://localhost:${port}`);
});
