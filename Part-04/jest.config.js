// (1) Testing in a node environment is not the same as testing in a browser environment
// We can define here which test environment we want to apply
module.exports = {
  testEnvironment: "jest-environment-jsdom" // jsdom for browser and node for server
};
