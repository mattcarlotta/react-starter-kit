const { outputPath, publicFolder } = require('./paths');
const { inDevelopment, PORT } = require('./envs');

/* webpack dev server options */
const devServer = {
  /* where to host */
  host: 'localhost',
  /* current port to host on */
  port: PORT,
  /* suppresses compiled information */
  quiet: true,
  /* allows webpack to fallback to react-router if route isn't found */
  historyApiFallback: true,
  /* shows on-screen errors before reloading */
  inline: true,
  /* allows files to be replaced without refreshing the browser */
  hot: true,
  /* opens the default browser on load */
  open: true,
  /* enable gzip compression for everything served */
  compress: true,
  /* disable polling (continuous checking of other files to see what state they are in) */
  watchOptions: {
    poll: false,
  },
  /* keep stats to minimal (only outputs for errors or new compilations) */
  stats: 'minimal',
  /* static files and folders to be served (default: public) */
  contentBase: inDevelopment ? publicFolder : outputPath,
  /* watches changes in files/folders specified in contentBase */
  watchContentBase: true,
};

module.exports = devServer;
