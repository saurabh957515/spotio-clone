const connectToMongoDB = require("../db/connectToMongoDB");
async function createGeoIndex() {
  const db = await connectToMongoDB();
  const collection = db.collection("leads");
  await collection.createIndex({ geo: "2dsphere" });
}

createGeoIndex().catch(console.error);
class Lead {
  constructor(data) {
    this.address = data.address || null;
    this.zipcode = data.zipcode || null;
    this.state = data.state || null;
    this.country = data.country || null;
    this.longitude = data.longitude || "-77.503209";
    this.latitude = data.latitude || "39.0211058";
    this.stageId = data.stageId || null;
    this.geo = this.createGeoPoint(); // Add GeoJSON Point

    if (!this.latitude || !this.longitude) {
      throw new Error("ID, latitude, and longitude are required fields.");
    }
  }

  /**
   * Creates a GeoJSON Point for the location
   * @returns {Object} GeoJSON Point object
   */
  createGeoPoint() {
    return {
      type: "Point",
      coordinates: [parseFloat(this.longitude), parseFloat(this.latitude)],
    };
  }

  /**
   * Save a new lead
   * @param {Object} data - Lead data
   * @returns {string} - ID of the inserted lead
   */
  static async create(data) {
    const db = await connectToMongoDB();
    const collection = db.collection("leads");
    const lead = new Lead(data); // Validate and create an instance
    const result = await collection.insertOne(lead);
    return result.insertedId;
  }

  /**
   * Find leads by query
   * @param {Object} query - MongoDB query object
   * @returns {Array} - Array of matching leads
   */
  static async find(query) {
    const db = await connectToMongoDB();
    const collection = db.collection("leads");
    return await collection.find(query).toArray();
  }

  /**
   * Update a lead
   * @param {string} id - Lead ID
   * @param {Object} updates - Update fields
   * @returns {boolean} - True if updated, false otherwise
   */
  static async update(id, updates) {
    const db = await connectToMongoDB();
    const collection = db.collection("leads");
    const result = await collection.updateOne({ id }, { $set: updates });
    return result.modifiedCount > 0;
  }

  /**
   * Delete a lead
   * @param {string} id - Lead ID
   * @returns {boolean} - True if deleted, false otherwise
   */
  static async delete(id) {
    const db = await connectToMongoDB();
    const collection = db.collection("leads");
    const result = await collection.deleteOne({ id });
    return result.deletedCount > 0;
  }
}

module.exports = Lead;
