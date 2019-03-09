module.exports = {
  currentDirectory: process.cwd(),
  /* working in development ENV */
  inDevelopment: process.env.NODE_ENV === 'development',
  /*
    how the CSS class names will be defined in the DOM:
    local = supplied class name
    hash:base64:5 = hashed string limited to 5 characters
  */
  localIdentName: '[local]___[hash:base64:5]',
  /* application's current port */
  PORT: process.env.PORT,
};
