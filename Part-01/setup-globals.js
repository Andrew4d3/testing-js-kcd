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

// (2) Since we'll be using these functions in all our tests, let's add them ass global variables
global.test = test;
global.expect = expect;

// (3) Now the only thing we have to do is to run our simple.js file but using the "require" argument. Like this:
// $ node --require ./setup-globals.js simple.js
