const express = require("express");

const app = express();
const consign = require("consign");

consign({ locale: "en-us", verbose: false })
  .include("middlewares")
  // .then('database')
  .then("shared")
  // .then('models')
  // .then("services")
  .then("controllers")
  .then("routes")
  .then("server")
  .into(app);
