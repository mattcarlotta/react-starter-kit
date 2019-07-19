// =============================================================== //
// ENVS                                                            //
// =============================================================== //

const { APIPORT, NODE_ENV, PORT } = process.env;

module.exports = {
  APIPORT,
  currentDirectory: process.cwd(), // current working directory
  inDevelopment: NODE_ENV === 'development', // current environment
  localIdentName: '[local]___[hash:base64:5]', // how class names will be defined in the DOM
  NODE_ENV,
  PORT, // application's current port
};
