import baseConfig from './base';

const config = {
  appEnv: process.env.REACT_WEBPACK_ENV || 'test',
  markMeHost: process.env.MARK_ME_SERVICE_HOST || 'http://localhost:3000',
  apiKey: process.env.API_KEY || 'Your test api key',
};

export default Object.freeze(Object.assign(baseConfig, config));
