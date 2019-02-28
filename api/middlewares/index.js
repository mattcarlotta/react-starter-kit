const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("../envs");

const env = process.env.NODE_ENV;

//= =============================================================================//
//  SERVER-SIDE EXPRESS MIDDLEWARES                                               /
//= =============================================================================//

module.exports = app => {
  app.set("env", env); // sets current env mode (development, production or test)
  app.set("database", config[env].database); // sets database name
  app.set("portal", config[env].portal); // sets current front-end url

  app.set("bluebird", bluebird); // promise library
  app.set("mongoose", mongoose); // creates models and connections to local MongoDB

  app.use(bodyParser.json()); // parses header requests (req.body)
  app.use(bodyParser.urlencoded({ extended: true })); // allows objects and arrays to be URL-encoded
};
