const { sumAsync, subtractAsync } = require("./math");

// (1) But what about async functions? In this case we're changing the sum and substract function calls for their async versions
// Notice how we refactor the test function to be on the async/await form
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

// (2) For such situations, we just have to refactor the test handler function to be of the async/await type
// This will work equally for sync and async functions
async function test(title, callback) {
	try {
		await callback();
		console.log(`✓ ${title}`);
	} catch (error) {
		console.error(`✕ ${title}`);
		console.error(error);
	}
}

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`${actual} is not equal to ${expected}`);
			}
		}
	};
}
