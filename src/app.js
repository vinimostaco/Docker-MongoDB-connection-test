import express from "express";
import databaseConnect from "./config/dbConnect.js";
const app = express();

app.use(express.json());
const connect = await databaseConnect();
connect.on("error", (err) => {
  console.log(err);
});
connect.once("open", () => {
  console.log("Database connected");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
