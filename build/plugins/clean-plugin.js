const config = require('../../config');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = new CleanWebpackPlugin(
  [path.basename(config.buildOutputRoot)],
  {
    root: path.dirname(config.buildOutputRoot),
    exclude: ['.gitignore'],
    verbose: false,
  }
);
