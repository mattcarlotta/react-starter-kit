const env = process.env.NODE_ENV;

module.exports = {
  /* working in development ENV */
  inDevelopment: env === 'development',
  /*
    source maps aren't needed nor recommended for production,
    so we'll only use them for staging and development
  */
  requiresSourceMap: env !== 'production',
  /*
    how the CSS class names will be defined in the DOM:
    local = supplied class name
    hash:base64:5 = hashed string limited to 5 characters
  */
  localIdentName: '[local]___[hash:base64:5]',
  /* application's current port */
  PORT: 3000,
};
