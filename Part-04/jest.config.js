module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // (4) We can resolve this by using this dependency called identity-obj-proxy which will resolve any property reference we pass it
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$": require.resolve("./test/style-mock.js")
  }
};
