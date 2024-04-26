const mongoose = require("mongoose");
const bodyParser = require("body-parser");
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// import { authenticateToken } from "./middleware/authenticateToken ";



const express = require("express");
import "dotenv/config";
import mainRouter from "./routes";
const app = express();


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
app.use("/api", mainRouter);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EVENT MANAGEMENT PLATFORM API",
      version: "1.0.0",
      description:
        "This Event-Management-Platform-Project API Documentation is designed to provide basics of how this API functions.",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
