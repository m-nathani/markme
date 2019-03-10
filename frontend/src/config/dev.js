import baseConfig from './base';

const config = {
  appEnv: process.env.REACT_WEBPACK_ENV || 'dev',
  markMe: process.env.MARK_ME_SERVICE_HOST || 'localhost:3000',
  apiKey: process.env.API_KEY || 'Your dev api key',
};

export default Object.freeze(Object.assign({}, baseConfig, config));
