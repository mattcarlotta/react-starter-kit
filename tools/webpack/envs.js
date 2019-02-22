const env = process.env.NODE_ENV;

//= =============================================================================//
// ENV SETUP FOR WEBPACK DEVELOPMENT & PRODUCTION CONFIGS                        /
//= =============================================================================//

module.exports = {
  /* working in development ENV */
  inDevelopment: env === 'development',
  /* hased name gives to images or fonts */
  hashedMediaName: '[name].[hash:8].[ext]',
  /*
    how the CSS class names will be defined in the DOM:
    local = supplied class name
    hash:base64:5 = hashed string limited to 5 characters
  */
  localIdentName: '[name]__[local]--[hash:base64:5]',
  /* current envirnoment */
  nodeENV: env || 'development',
  /* enable/disable webpack-hot-middleware overlay */
  showErrorOverlay: true,
  /* enable/disable css module imports */
  useCSSModules: true,
};
