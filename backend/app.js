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
(async () => {
  const module = await import("supercluster");
  Supercluster = module.default; // Ensure you're accessing the default export
})();

app.use(express.static(path.join(__dirname, "dist")));

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
    console.log(req.body);
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
        totalRowsProcessed++; // Validate the latitude and longitude before creating the geo object
        const longitude = parseFloat(row._15);
        const latitude = parseFloat(row._16);

        // Skip invalid records where longitude or latitude is NaN
        if (isNaN(longitude) || isNaN(latitude)) {
          console.log(`Skipping invalid entry: ${JSON.stringify(row)}`);
          return; // Skip this record
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
async function getLeadsInBoundingBox(
  minLat,
  maxLat,
  minLon,
  maxLon,
  zoomLevel
) {
  try {
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

    const boundingBox = [
      [parseFloat(minLon), parseFloat(minLat)], // Southwest corner
      [parseFloat(maxLon), parseFloat(maxLat)], // Northeast corner
    ];
    const centers = [
      { lat: (minLat + maxLat) / 2, lon: minLon }, // Center of the left edge
      { lat: (minLat + maxLat) / 2, lon: maxLon }, // Center of the right edge
      { lat: minLat, lon: (minLon + maxLon) / 2 }, // Center of the bottom edge
      { lat: maxLat, lon: (minLon + maxLon) / 2 }, // Center of the top edge
    ];
    // Aggregation pipeline
    const aggregationPipeline = centers.reduce((pipeline, center) => {
      // Each center point gets its own aggregation stages
      const geoNearStage = {
        $geoNear: {
          near: { type: "Point", coordinates: [center.lon, center.lat] },
          distanceField: "distance",
          maxDistance: 40000, // 40 km radius (in meters)
          spherical: true,
        },
      };

      const groupStage = {
        $group: {
          _id: null,
          count: { $sum: 1 },
          centers: {
            $push: {
              centerLat: "$geo.coordinates.1", // Latitude
              centerLon: "$geo.coordinates.0", // Longitude
              count: 1, // The count for each center
            },
          },
        },
      };

      // Add the stages to the pipeline
      pipeline.push(geoNearStage, groupStage);

      return pipeline;
    }, []);
    const result = await collection.aggregate(aggregationPipeline).toArray();
    console.log(result);
    return result;
  } catch (err) {
    console.error("Error retrieving leads within bounding box:", err);
  }
}
function generateGrid(minLat, maxLat, minLon, maxLon, spacing) {
  const points = [];
  for (let lat = minLat; lat <= maxLat; lat += spacing) {
    for (let lon = minLon; lon <= maxLon; lon += spacing) {
      points.push({ lat, lon });
    }
  }
  return points;
}

// Utility for converting pixel radius to meters
function pixelRadiusToMeters(pixelRadius, zoomLevel) {
  const metersPerPixel = (156543.03392 * Math.cos(0)) / Math.pow(2, zoomLevel);
  return pixelRadius * metersPerPixel;
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
