const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const client = new MongoClient(
  process.env.MONGO_DB_URI,
  { useUnifiedTopology: true }
);

let db;

async function connectToMongoDB() {
  if (!db) {
    try {
      await client.connect();
      db = client.db("mapClusterDB");
      console.log("Connected to MongoDB successfully!");
      // const collection = db.collection("leads");
      // const result = await collection.deleteMany({});
      // console.log(`${result.deletedCount} document(s) deleted.`);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }
  return db;
}

module.exports = connectToMongoDB;
