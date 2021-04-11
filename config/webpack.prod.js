/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./webpack.base');

const config = {
  ...baseConfig,
  mode: 'production',
  optimization: {
    usedExports: true,
  },
  devtool: 'source-map',
};

module.exports = config;
