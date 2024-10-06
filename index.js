const express = require("express");
const { config } = require("dotenv");
const bodyParser = require("body-parser");
const ErrorMiddleware = require("./middlewares/Error.js");
const { connectDB } = require("./server.js");

// Configration for ENV File
config({
  path: "./.env",
});

const app = express();

// Connect to MongoDB Database
connectDB();

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
app.listen(process.env.port, () => {
  console.log(`Server Running on port ${process.env.port}`);
});

// Routes
const collegeRoute = require("./routes/collegeRoute.js");
app.use("/college", collegeRoute);

// Error Handling using Error Middleware
app.use(ErrorMiddleware);
module.exports = app;
