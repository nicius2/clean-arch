import mongoose from "mongoose";
import DatabaseConnection from "../DatabaseConnection";

export class MongoConnection implements DatabaseConnection {
  async connect(): Promise<void> {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI not defined");
    }

    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }
}
