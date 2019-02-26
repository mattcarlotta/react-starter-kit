const express = require("express");
const consign = require("consign");

const app = express();

consign({
  cwd: `${process.cwd()}/api`,
  extensions: [".js"],
  locale: "en-us",
  verbose: true
})
  .include("middlewares")
  .then("database")
  .then("utils")
  .then("models")
  // .then("services")
  .then("controllers")
  .then("routes")
  .then("server")
  .into(app);
