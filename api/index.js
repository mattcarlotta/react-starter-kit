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
    .then("utils")
    .then("models")
    // .then("services")
    .then("controllers")
    .then("routes")
    // .then("server")
    .into(app);
};

// consign({
//   cwd: `${process.cwd()}/api`,
//   extensions: [".js"],
//   locale: "en-us",
//   verbose: false
// })
//   .include("middlewares")
//   .then("database")
//   .then("utils")
//   .then("models")
//   // .then("services")
//   .then("controllers")
//   .then("routes")
//   .then("server")
//   .into(app);
