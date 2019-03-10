/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
require('dotenv').config()
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const markMePort = config.devServer.port

new WebpackDevServer(webpack(config), config.devServer)
  .listen(markMePort, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at :' + markMePort);
    console.log('Opening your system browser...');
  });
