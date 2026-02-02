import mongoose from "mongoose";
import DatabaseConnection from "../DatabaseConnection";

export class MongoConnection implements DatabaseConnection {
     async connect(): Promise<void> {
          try {
               await mongoose.connect(process.env.DATABASE_URL || "");
               console.log("Connected to MongoDB");
          } catch (error) {
               console.error("Error connecting to MongoDB:", error);
               process.exit(1);
          }
     }

     async disconnect(): Promise<void> {
          await mongoose.disconnect();
     }
}