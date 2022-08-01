import mongoose from "mongoose";
import "dotenv/config";
import config from "config";

async function connect() {
  const dbUri = process.env.MONGO_URI!;

  try {
    await mongoose.connect(dbUri);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("Could not connect to database");
    process.exit(1);
  }
}

export default connect;
