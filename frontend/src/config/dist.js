import baseConfig from './base';

const config = {
  appEnv: process.env.REACT_WEBPACK_ENV || 'dist',
  markMeHost: process.env.MARK_ME_SERVICE_HOST || 'http://localhost:3000',
  apiKey: process.env.API_KEY || 'Your dist api key',
};

export default Object.freeze(Object.assign({}, baseConfig, config));
