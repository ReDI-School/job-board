const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const copyPlugin = new CopyPlugin({
  patterns: [
    {
      from: "mocks/jobs.json"
    },
  ],
});

const config = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    writeToDisk: (filePath) => {
      return /\.json$/.test(filePath);
    },
  },

  plugins: [
    htmlPlugin,
    copyPlugin,
  ]
};

module.exports = config;
