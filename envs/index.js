const env = process.env.NODE_ENV;

//= =============================================================================//
// ENV SETUP FOR WEBPACK DEVELOPMENT & PRODUCTION CONFIGS                        /
//= =============================================================================//
module.exports = {
  /* mongo DB database connection */
  DB: "mongodb://localhost/boilerplate-dev-db",
  /* working in development ENV */
  inDevelopment: env === "development",
  /* hased name gives to images or fonts */
  hashedMediaName: "[name].[hash:8].[ext]",
  /* current host */
  HOST: process.env.NODE_HOST || "localhost",
  /* how the CSS class names will be declared in the DOM */
  localIdentName: "[name]__[local]--[hash:base64:5]",
  /* current envirnoment */
  nodeENV: env || "development",
  /* current express port */
  PORT: process.env.PORT,
  /* enable/disable webpack-hot-middleware overlay */
  showErrorOverlay: true,
  /* enable/disable css module imports */
  useCSSModules: true
};
