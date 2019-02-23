// precompiles ES6 syntax
require("@babel/register");
// webpack hooks
require("./tools/webpack/hooks")();
// runs server
require("./src/server");
