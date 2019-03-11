/**
 * @file Jest configuration.
 */

module.exports = {
  rootDir: 'test',
  testRegex: '/test/.*test\\.js$',
  setupFiles: ['<rootDir>/setup.js'],
};
