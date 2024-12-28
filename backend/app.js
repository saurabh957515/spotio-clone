const express = require("express");
const connectToMongoDB = require("./db/connectToMongoDB");
const Lead = require("./models/Lead");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const csv = require("csv-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const fs = require("fs");
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../spotio-clone/dist")));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../spotio-clone/dist', 'index.html'));
// });

const cacheFilePath = path.join(__dirname, "cache", "cache-cluster.json");

function ensureCacheDirectory() {
  const cacheDir = path.dirname(cacheFilePath);
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
}

function readCache() {
  ensureCacheDirectory();
  if (fs.existsSync(cacheFilePath)) {
    try {
      const data = fs.readFileSync(cacheFilePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading cache file:", error);
    }
  }
  return {};
}

function writeCache(cacheData) {
  ensureCacheDirectory();
  try {
    fs.writeFileSync(
      cacheFilePath,
      JSON.stringify(cacheData, null, 2),
      "utf-8"
    );
    console.log("Cache successfully written to file.");
  } catch (error) {
    console.error("Error writing to cache file:", error);
  }
}

async function cacheClusterData(key, data) {
  const cache = readCache();
  cache[key] = data;
  writeCache(cache);
}

(async () => {
  const module = await import("supercluster");
  Supercluster = module.default;
})();

app.get("/api/getby", async (req, res) => {
  const { minLat, maxLat, minLon, maxLon, zoomLevel } = req?.query;
  if (!minLat || !maxLat || !minLon || !maxLon || !zoomLevel) {
    console.log("Missing or invalid query parameters");
    return res.json([]); // Send an empty array as the response
  }
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
let currentAbortController = null;
async function getLeadsInBoundingBox(
  minLat,
  maxLat,
  minLon,
  maxLon,
  zoomLevel
) {
  if (currentAbortController) {
    currentAbortController.abort();
  }

  currentAbortController = new AbortController();
  const signal = currentAbortController.signal;

  const cacheKey = zoomLevel;
  const cache = readCache();
  if (cache[cacheKey]) {
    console.log(`Cache hit for key: ${cacheKey}`);
    return cache[cacheKey];
  }
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
          let aggregationPipeline;

          if (parseFloat(subMaxLon) < parseFloat(subMinLon)) {
            // Handle the case where the bounding box wraps around
            aggregationPipeline = [
              {
                $match: {
                  $or: [
                    {
                      geo: {
                        $geoWithin: {
                          $box: [
                            [parseFloat(subMinLon), parseFloat(subMinLat)],
                            [180, parseFloat(subMaxLat)],
                          ],
                        },
                      },
                    },
                    {
                      geo: {
                        $geoWithin: {
                          $box: [
                            [-180, parseFloat(subMinLat)],
                            [parseFloat(subMaxLon), parseFloat(subMaxLat)],
                          ],
                        },
                      },
                    },
                  ],
                  "geo.coordinates": { $exists: true, $ne: null }, // Ensure coordinates exist
                },
              },
              {
                $group: {
                  _id: null,
                  count: { $sum: 1 }, // Count the number of documents in the sub-box
                  centerLat: {
                    $avg: { $arrayElemAt: ["$geo.coordinates", 1] },
                  }, // Average latitude
                  centerLon: {
                    $avg: { $arrayElemAt: ["$geo.coordinates", 0] },
                  }, // Average longitude
                },
              },
            ];
          } else {
            // Regular bounding box case
            const boundingBox = [
              [parseFloat(subMinLon), parseFloat(subMinLat)], // Southwest corner
              [parseFloat(subMaxLon), parseFloat(subMaxLat)], // Northeast corner
            ];
            aggregationPipeline = [
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
                  centerLat: {
                    $avg: { $arrayElemAt: ["$geo.coordinates", 1] },
                  }, // Average latitude
                  centerLon: {
                    $avg: { $arrayElemAt: ["$geo.coordinates", 0] },
                  }, // Average longitude
                },
              },
            ];
          }

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

    const result = await divideBoundingBoxAndAggregate(
      collection,
      minLat,
      minLon,
      maxLat,
      maxLon,
      signal
    );
    if (result) {
      cacheClusterData(cacheKey,result);
    }
    return result;
  } catch (err) {
    if (err.message === "Request was aborted") {
      console.warn("Request was canceled:", err);
    } else {
      console.error("Error retrieving leads within bounding box:", err);
    }
  }
}

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server running on http://localhost:${port}`);
});
