'use strict';

const webpack = require('webpack');
const baseConfig = require('./base');
const defaultSettings = require('./defaults');

// Add needed plugins here
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: [
    'bootstrap-loader',
    defaultSettings.srcPath
  ],
  cache: true,
  devtool: 'none',
  plugins: [
    ...defaultSettings.getDefaultPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      cache: true,
      parallel: true,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  // Add needed loaders to the defaults here
  module: {
    rules: [
      ...defaultSettings.getDefaultModules(),
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        // exclude: [/conf/, /controller/, /middleware/, /endpoint/,],
        include: [
          defaultSettings.srcPath
        ]
      },
    ]
  }
});
module.exports = config;
