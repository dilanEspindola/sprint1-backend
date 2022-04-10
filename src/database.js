import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
  try {
    const database = await mongoose.connect(MONGODB_URI);
    console.log(database.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
