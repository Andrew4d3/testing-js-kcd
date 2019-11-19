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
    global: {
      statements: 20,
      branches: 6,
      lines: 20,
      functions: 20,
    },
    './Part-04/src/shared/utils.js': {
      statements: 100,
      branches: 80,
      lines: 100,
      functions: 100,
    },
  },
  // (1) With jest we can use watch plugins, Like this one, which will ease the way we select test/files by typing a search pattern
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
  ],
}
