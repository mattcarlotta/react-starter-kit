const devServer = require('./config/devServer');
const getPlugins = require('./config/plugins');
const optimization = require('./config/optimization');
const output = require('./config/output');
const rules = require('./config/rules');
const { entryPath } = require('./config/paths');
const { inDevelopment } = require('./config/envs');

// =============================================================== //
// WEBPACK CONFIGURATION                                           //
// =============================================================== //

module.exports = {
  devtool: inDevelopment ? 'cheap-module-source-map' : false,
  devServer,
  entry: [entryPath],
  mode: inDevelopment ? 'development' : 'production',
  module: { rules },
  optimization,
  output,
  performance: {
    hints: false,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  plugins: getPlugins(),
};
