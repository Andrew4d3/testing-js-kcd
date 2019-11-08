const thumbWar = require("../thumb-war");
const utils = require("../utils");

// (1) There's a different way to mock functions in Jest. We have the alternative to use "spyOn"
test("returns winner", () => {
  // (2) With "spyOn" we pass the target module and the property we want to apply the mocking
  jest.spyOn(utils, "getWinner");
  // (3) If we want to mock some implementation, we can use this method:
  utils.getWinner.mockImplementation((p1, p2) => p1);

  // (4) The rest works exactly like jest.fn
  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"]
  ]);

  // (5) The cleanup is done slightly different though
  utils.getWinner.mockRestore();
});
