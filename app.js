const logger=require('./middlewaers/logger')
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const coursesRoute = require("./routes/courses-route");
const homeRoute=require('./routes/home-route')

const app = express();
require("dotenv").config();
const startupDebug = require("debug")("startup");
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);
app.use(helmet());
startupDebug("hello from startup debug");

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// استفاده از فایل routes برای courses
app.use("/api/courses", coursesRoute);

app.use('/' ,homeRoute)

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

