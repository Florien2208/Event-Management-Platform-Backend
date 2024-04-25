const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";

// import { authenticateToken } from "./middleware/authenticateToken ";

// import mainRouter from "./routers";

const express = require("express");
import "dotenv/config";
import mainRouter from "./routes";
const app = express();
// app.use(authenticateToken);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Event Management Platform  API ");
});
app.listen(process.env.port, (req, res) => {
  console.log(
    `E-commerce is running on the port http://localhost:${process.env.port} connected successfully`
  );
});
mongoose.connect(process.env.dbConnect).then(() => {
  console.log("the mongoose database connected successfully");
});
app.use("/app", mainRouter);
