const express = require("express");
const { config } = require("dotenv");
const bodyParser = require("body-parser");
const ErrorMiddleware = require("./middlewares/Error.js");

// Configration for ENV File
config({
  path: "./.env",
});

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Ricoz-School DB is working..");
});

// Server Running on Port 3000
app.listen(3000, () => {
  console.log(`Server Running on port 3000`);
});

// Error Handling using Error Middleware
app.use(ErrorMiddleware);
module.exports = app;
