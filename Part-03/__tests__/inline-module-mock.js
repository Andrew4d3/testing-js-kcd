const thumbWar = require("../thumb-war");
const utilsMock = require("../utils");

// (1) We haven't had any issues using jest.fn and spyOn. But that's because so far we have been using commonJs (require)
// When using ES6 modules, we have to come up with a different solution. So let's use jest.mock now!

// (2) With jest.mock we have to pass a relative path (from here) of the targeted module.
// And as second parameter, we need to pass a function returning an object with the mocked properties/methods
jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1) // (3) Here we can use the jest.fn helper to mock this method
  };
});

test("returns winner", () => {
  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe("Kent C. Dodds");
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"]
  ]);

  // (4) To clean up, we use this mockReset method.
  utilsMock.getWinner.mockReset();
});
