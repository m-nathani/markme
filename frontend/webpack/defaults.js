/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const srcPath = path.join(__dirname, '/../src');
const defaultPort = process.env.PORT || 8000;
const webpack = require('webpack');

/**
 * Get the default modules object for webpack
 * @return {Object}
 */

const getDefaultModules = () => {
  return [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      include: [
        srcPath
      ]
    },
    {
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      include: srcPath,
      use: 'eslint-loader'
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(scss|sass)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
      }),
    },
    {
      test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
      use: 'file-loader?name=[name].[ext]?[hash]'
    },
    // the following 3 rules handle font extraction
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },

    {
      test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    },
    {
      test: /\.otf(\?.*)?$/,
      use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf'
    }
  ];
}

const envKeys = (env) => (Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {}));

const getDefaultPlugin = () => {
  return  [
    new webpack.DefinePlugin(envKeys(process.env)),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
    }),
  ];
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: defaultPort,
  getDefaultModules,
  getDefaultPlugin,
};
