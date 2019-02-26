const express = require("express");
const consign = require("consign");

const app = express();

consign({
  cwd: `${process.cwd()}/api`,
  extensions: [".js"],
  locale: "en-us",
  verbose: false
})
  .include("middlewares")
  .then("database")
  .then("models")
  .then("seeds")
  .into(app);
