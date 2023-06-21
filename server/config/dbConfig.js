import mongoose from "mongoose";
import User from "../model/User.js";
import { dataUser } from "../data/data.js";
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB CONNECTED : ${conn.connection.host}`);
  } catch (error) {
    console.log(`DB CONNECTION ERROR: ${error}`);
    process.exit(1);
  }
};

export default connectDb;
