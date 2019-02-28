const env = process.env.NODE_ENV;

//= =============================================================================//
// ENV SETUP FOR WEBPACK DEVELOPMENT & PRODUCTION CONFIGS                        /
//= =============================================================================//
module.exports = {
  inDevelopment: env === "development", // working in development ENV
  hashedMediaName: "[name].[hash:8].[ext]", // hased name gives to images or fonts
  HOST: process.env.NODE_HOST || "localhost", // current host
  localIdentName: "[folder]_[name]__[local]--[hash:base64:5]", // how the CSS class names will be declared in the DOM
  nodeENV: env || "development", // current envirnoment
  PORT: process.env.PORT || 3000, // current express port
  showErrorOverlay: true, // enable/disable webpack-hot-middleware overlay
  useCSSModules: true // enable/disable css module imports
};
