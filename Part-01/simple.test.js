const { sumAsync, subtractAsync } = require("./math");

test("sumAsync adds numbers asynchronously", async () => {
	const result = await sumAsync(3, 7);
	const expected = 10;
	expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers asynchronously", async () => {
	const result = await subtractAsync(7, 3);
	const expected = 4;
	expect(result).toBe(expected);
});

// (1) Now we have some basic idea of how a test framework works. We don't have to use our own implementation
// Let's rename this file to simple.test.js and start using it by doing:
// $ npx jest
