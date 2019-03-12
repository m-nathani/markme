/**
 * @file Jest configuration.
 */

module.exports = {
  rootDir: 'src',
  testRegex: '/src/test/.*\\.test\\.js$',
  setupFiles: ['<rootDir>/test/setup.js'],
  "moduleNameMapper": {
    "^action(.*)$": `<rootDir>/action$1`,
    "^app(.*)$": `<rootDir>/app$1`,
    "^constant(.*)$": `<rootDir>/constant$1`,
    "^component$": `<rootDir>/component$1`,
    "^container(.*)$": `<rootDir>/container$1`,
    "^reducer(.*)$": `<rootDir>/reducer$1`,
    "^styles(.*)$": `<rootDir>/styles$1`,
    "^service(.*)$": `<rootDir>/service$1`,
    "^images(.*)$": `<rootDir>/images$1`,
    "^config(.*)$": `<rootDir>/config/` + (process.env.REACT_WEBPACK_ENV || 'dev') + '$1'
  }
};
