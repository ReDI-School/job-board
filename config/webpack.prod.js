/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./webpack.base');

const config = {
  ...baseConfig,
  mode: 'production',
  optimization: {
    usedExports: true,
  },
  devtool: 'source-map',
  performance: {
    maxEntrypointSize: 350000,
    maxAssetSize: 350000
  }
};

module.exports = config;
