// (1) Now we're going to learn some basics of mocking
const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// (2) The function we're going to mock is "getWinner". This function works in random way so we have to make it deterministic for our tests.
// First we're going to save the original function so that we don't loose its reference
const originalGetWinner = utils.getWinner
// (3) Then we assigned this mocked function - which always returns p1 as winner - to the getWinner property from utils
utils.getWinner = (p1, p2) => p1

// (4) Now we call the function that uses the getWinner function that we recently mocked (thumbWar). It should return the first parameter as winner always!
const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
// (5) We assert the value to verify that everything went OK
assert.strictEqual(winner, 'Kent C. Dodds')

// (6) And for last we perform a cleanup by returning the getWinner property to its original reference
utils.getWinner = originalGetWinner