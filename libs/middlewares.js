const bcrypt = require("bcrypt");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const config = require("../env/config.js");
// const cors = require("cors");
const LocalStrategy = require("passport-local").Strategy;
const moment = require("moment");
const mongoose = require("mongoose");
const morgan = require("morgan");
const passport = require("passport");

const env = process.env.NODE_ENV;
const currentENV = () => {
  const envirnoment = config[env];
  let variables = "";
  for (string in envirnoment) {
    variables += `\x1b[33m• ${string.toUpperCase()}\x1b[0m: ${
      envirnoment[string]
    } \n `;
  }
  return variables;
};
console.log(
  `\n[ \x1b[1m${env.toUpperCase()} ENVIRONMENT\x1b[0m ]\n ${currentENV()}`
);
//============================================================//
/* APP MIDDLEWARE */
//============================================================//
module.exports = app => {
  /// CONFIGS ///
  app.set("env", env); // sets current env mode (development, production or test)
  app.set("host", config[env].host); // sets localhost or remote host
  app.set("database", config[env].database); // sets database name
  app.set("port", config[env].port); // current listening port
  app.set("portal", config[env].portal); // sets current front-end url

  /// FRAMEWORKS ///
  app.set("bcrypt", bcrypt); // framework for hashing/salting passwords
  app.set("bluebird", bluebird); // promise library
  app.set("LocalStrategy", LocalStrategy); // passport framework for handling local authentication
  app.set("moment", moment); // framework for managing time
  app.set("mongoose", mongoose); // MongoDB
  app.set("passport", passport); // framework for authenticating users
  // app.use(cors({ credentials: true, origin: config[env].portal })); // allows receiving of cookies from front-end
  app.use(morgan("tiny")); // logging framework
  app.use(bodyParser.json()); // parses header requests (req.body)
  app.use(bodyParser.urlencoded({ extended: true })); // allows objects and arrays to be URL-encoded
  app.use(passport.initialize()); // initialize passport routes to accept req/res/next
  app.set("json spaces", 2); // sets JSON spaces for clarity
};
