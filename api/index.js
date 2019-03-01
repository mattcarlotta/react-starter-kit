const consign = require("consign");

module.exports = app => {
  consign({
    cwd: `${process.cwd()}/api`,
    extensions: [".js"],
    locale: "en-us",
    verbose: false
  })
    .include("middlewares")
    .then("database")
    .then("seeds")
    .then("utils")
    .then("models")
    .then("controllers")
    .then("routes")
    .into(app);
};
