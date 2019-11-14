const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // (6) By doing this, our jest environment will be able to understand any module from the src/shared folder as a regular node_module
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: [require.resolve('./test/setup-tests.js')],
}
