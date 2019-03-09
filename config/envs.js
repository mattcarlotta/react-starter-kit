// =============================================================== //
// ENVS                                                            //
// =============================================================== //

module.exports = {
  currentDirectory: process.cwd(), // current working directory
  inDevelopment: process.env.NODE_ENV === 'development', // current environment
  localIdentName: '[local]___[hash:base64:5]', // how class names will be defined in the DOM
  PORT: process.env.PORT, // application's current port
};
