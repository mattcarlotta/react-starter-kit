const { outputPath, publicFolder } = require('./paths');
const { inDevelopment, PORT } = require('./envs');

// =============================================================== //
// WEBPACK DEV SERVER CONFIGURATION                                //
// =============================================================== //

/* webpack dev server options */
module.exports = {
  host: 'localhost', // where to host
  port: PORT, //  current port to host on
  quiet: true, // suppresses compiled information
  historyApiFallback: true, // allows webpack to fallback to react-router if route isn't found
  inline: true, // shows on-screen errors before reloading
  hot: true, // allows files to be replaced without refreshing the browser
  open: true, // opens the default browser on load
  compress: true, // enable gzip compression for everything served
  watchOptions: {
    poll: false, //  disable polling (continuous checking of other files to see what state they are in)
  },
  stats: 'minimal', // keep stats to minimal (only outputs for errors or new compilations)
  contentBase: inDevelopment ? publicFolder : outputPath, // keep stats to minimal (only outputs for errors or new compilations)
  watchContentBase: true, //  watches changes in files/folders specified in contentBase
};
