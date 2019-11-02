// (1) Here we have two simple functions, one is adding and the other one substracting. But the Add one is wrong! It's easy to verify but let's write an automated test for doing so
const sum = (a, b) => a - b;
const substract = (a, b) => a - b;

// (2) We define the result and the expected value we know for sure that is correct
let result = sum(2, 3);
expected = 5;
if (result !== expected) {
	// (3) We verify if the result expected is correct
	throw new Error(`${result} is not equal to ${expected}`); // (4) If it's not correct we throw an error
}

// (4) The same for the other function
result = substract(5, 2);
expected = 3;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected}`);
}

// (5) And that was one simple example on how to create an automated test
