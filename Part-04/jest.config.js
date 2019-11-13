module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  // (2) Then, You need to set the file path like this:
  setupFilesAfterEnv: [require.resolve('./test/setup-tests.js')],
}
