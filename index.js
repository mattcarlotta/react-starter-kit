// precompiles ES6 syntax
require("@babel/register");

global.__CLIENT__ = false;
global.__RUNNING_EXAMPLE__ = false;

// webpack hooks
require("./tools/webpack/hooks")();
// runs server
require("./src/server");
