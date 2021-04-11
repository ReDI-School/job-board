/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./webpack.base');
const CopyPlugin = require('copy-webpack-plugin');

const copyPlugin = new CopyPlugin({
  patterns: [
    {
      from: 'mocks',
    },
  ],
});

const config = {
  ...baseConfig,
  mode: 'development',
  devServer: {
    writeToDisk: (filePath) => {
      return /\.json$/.test(filePath);
    },
  },
  plugins: [
    ...baseConfig.plugins,
    copyPlugin
  ],
};

module.exports = config;
