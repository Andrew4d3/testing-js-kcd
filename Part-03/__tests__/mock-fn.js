const thumbWar = require("../thumb-war");
const utils = require("../utils");

// (1) Our prior mocked function worked kind of fine, but there were some isssues.
// For example, we could pass just one parameter and the test would still pass, which is not OK.
// Fortunately for us, jest counts with a "fn" method which we can use to mock functions easily
test("returns winner", () => {
  const originalGetWinner = utils.getWinner;
  // (2) We pass our mocked implementation as a parameter to the "fn" jest method
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe("Kent C. Dodds");

  // (3) The fn method generates a mock property which we can check to see the calls made and their arguments
  expect(utils.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"]
  ]);
  // (4) It also counts with an API that we can use to make different assertions like these ones:
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    "Kent C. Dodds",
    "Ken Wheeler"
  );
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    "Kent C. Dodds",
    "Ken Wheeler"
  );

  // cleanup
  utils.getWinner = originalGetWinner;
});
