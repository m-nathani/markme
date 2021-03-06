'use strict';

const webpack = require('webpack');
const baseConfig = require('./base');
const defaultSettings = require('./defaults');

// Add needed plugins here
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    defaultSettings.srcPath
  ],
  cache: true,
  devtool: 'eval-source-map',
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  plugins: [
      ...defaultSettings.getDefaultPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // Add needed loaders to the defaults here
  module: {
    rules: [
      ...defaultSettings.getDefaultModules(),
    ]
  }
});

module.exports = config;
