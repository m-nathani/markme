'use strict';

const webpack = require('webpack');
const baseConfig = require('./base');
const defaultSettings = require('./defaults');

// Add needed plugins here
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  mode: 'production',
  entry: [
    defaultSettings.srcPath
  ],
  performance: {
    hints: false,
  },
  cache: true,
  devtool: 'none',
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: {
            warnings: false,
          },
        },
      })
    ]
  },
  plugins: [
    ...defaultSettings.getDefaultPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  // Add needed loaders to the defaults here
  module: {
    rules: [
      ...defaultSettings.getDefaultModules(),
    ]
  }
});
module.exports = config;
