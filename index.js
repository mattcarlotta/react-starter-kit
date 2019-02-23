// Allows you to precompile ES6 syntax
require("@babel/register");
// Run assets require hooks
require("./tools/webpack/hooks")();
// Run server
require("./src/server");
