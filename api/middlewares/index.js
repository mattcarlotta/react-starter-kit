const { resolve } = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const compression = require("compression");
const hpp = require("hpp");

const { cwd } = process;

//= =============================================================================//
//  SERVER-SIDE EXPRESS MIDDLEWARES                                               /
//= =============================================================================//

export default app => {
  app.use(bodyParser.json()); // parses header requests (req.body)
  app.use(bodyParser.urlencoded({ extended: true })); // allows objects and arrays to be URL-encoded
  app.set("json spaces", 2); // sets JSON spaces for clarity
  app.use(hpp()); // prevents HTTP parameter pollution
  app.use(compression()); // compresses all requests
  app.use(morgan("tiny")); // logs XHR requests
};
