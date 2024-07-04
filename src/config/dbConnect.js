import mongoose from "mongoose";

async function databaseConnect() {
  mongoose.connect("mongodb://localhost:27017/mongodb");
  return mongoose.connection;
}

export default databaseConnect;
