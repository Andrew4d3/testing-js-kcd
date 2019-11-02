const { sum, subtract } = require("./math");

let result, expected;

result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

// (1) Instead of repeating if statements over and over, we can use this "expect" function that we can use anytime we want
function expect(actual) {
	return {
		toBe(expected) {
			// (2) Here we're applying the same logic than before
			if (actual !== expected) {
				throw new Error(`${actual} is not equal to ${expected}`);
			}
		}
	};
}

// (3) That's how assertion libraries work!
