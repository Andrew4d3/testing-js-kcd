const thumbWar = require("../thumb-war");
const utilsMock = require("../utils");

// (1) It's very likeyly that you're gonna need the same module mocks to be used across different test files.
// For such situations we can create an external mock file
jest.mock("../utils");

test("returns winner", () => {
   const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
   expect(winner).toBe("Kent C. Dodds");
   expect(utilsMock.getWinner.mock.calls).toEqual([
      ["Kent C. Dodds", "Ken Wheeler"],
      ["Kent C. Dodds", "Ken Wheeler"]
   ]);

   utilsMock.getWinner.mockReset();
});
