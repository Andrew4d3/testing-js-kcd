// (1) We need to find a way to encapsulate our tests, so that we can see the results of all of them
const { sum, subtract } = require("./math");

test("sum adds numbers", () => {
	const result = sum(3, 7);
	const expected = 10;
	expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
	const result = subtract(7, 3);
	const expected = 4;
	expect(result).toBe(expected);
});

// (2) We're going to use this tests function which will receive a title and a callback as parameters
function test(title, callback) {
	try {
		// (3) If the callback runs without errors, the test passes
		callback();
		console.log(`✓ ${title}`);
	} catch (error) {
		// (4) Otherwise, it fails
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
