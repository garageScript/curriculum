/**
 * Takes in 2 numbers, returns the larger number
 * @param {number} a
 * @returns {number}
 */

// Brute Force
const solution = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  };
};

/*
// Ternary Operator
const solution = (a, b) => {
  return a > b ? a : b;
}
*/

module.exports = {
  solution,
};
