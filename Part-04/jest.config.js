module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // (3) For such situations, we can configure a mocked that will be used anytime the Jest tests come across a CSS file
    "\\.css$": require.resolve("./test/style-mock.js")
  }
};
