const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: [require.resolve('./test/setup-tests.js')],
  coverageThreshold: {
    // (1) What if we want to set a specific coverage threshold for all the files? We can do it like this:
    global: {
      statements: 20,
      branches: 6,
      lines: 20,
      functions: 20,
    },
    // (2) And what if we want to do different coverage setting for different files. As simple as this:
    './Part-04/src/shared/utils.js': {
      statements: 100,
      branches: 80,
      lines: 100,
      functions: 100,
    },
  },
}
