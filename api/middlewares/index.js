const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const hpp = require("hpp");
const compression = require("compression");
const config = require("../envs");

const env = process.env.NODE_ENV;
const currentENV = () => {
  const envirnoment = config[env];
  const keys = Object.keys(envirnoment);
  const values = Object.values(envirnoment);

  let variables = "";
  for (let i = 0; i < keys.length; i += 1) {
    variables += `\x1b[33m• ${keys[i].toUpperCase()}\x1b[0m: ${values[i]} \n `;
  }
  return variables;
};

// eslint-disable-next-line no-console
console.log(
  `\n[ \x1b[1m${env.toUpperCase()} API ENVIRONMENT\x1b[0m ]\n ${currentENV()}`
);

if (env !== "development") {
  // eslint-disable-next-line no-console
  console.log(
    `\n\x1b[1mYour application is running on: ${config[env].portal}\x1b[0m`
  );
}

//= =============================================================================//
//  SERVER-SIDE EXPRESS MIDDLEWARES                                               /
//= =============================================================================//

module.exports = app => {
  app.set("env", env); // sets current env mode (development, production or test)
  app.set("database", config[env].database); // sets database name
  app.set("port", config[env].port); // current listening port
  app.set("portal", config[env].portal); // sets current front-end url

  app.set("bluebird", bluebird); // promise library
  app.set("mongoose", mongoose); // MongoDB

  app.use(
    cors({
      origin: config[env].portal
    })
  ); // allows receiving of cookies/tokens from front-end
  app.use(morgan("tiny")); // logging framework
  app.use(bodyParser.json()); // parses header requests (req.body)
  app.use(bodyParser.urlencoded({ extended: true })); // allows objects and arrays to be URL-encoded
  app.use(hpp()); // prevents HTTP parameter pollution
  app.use(compression()); // compresses all requests
  app.set("json spaces", 2); // sets JSON spaces for clarity
};
