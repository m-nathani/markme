/**
 * @file Jest configuration.
 */

module.exports = {
  rootDir: 'src',
  testRegex: '/src/.*test\\.js$',
  setupFiles: ['<rootDir>/test/setup.js'],
  "moduleNameMapper": {
    '^@/(.*)$': '<rootDir>/$1'
  }
};
