'use strict';

const webpack = require('webpack');
const baseConfig = require('./base');
const defaultSettings = require('./defaults');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Add needed plugins here

let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    'bootstrap-loader',
    defaultSettings.srcPath
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
      ...defaultSettings.getDefaultPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      cache: true,
      parallel: true,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  // Add needed loaders to the defaults here
  module: {
    rules: [
      ...defaultSettings.getDefaultModules(),
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: [
          defaultSettings.srcPath
        ]
      }
    ]
  }
});

module.exports = config;
