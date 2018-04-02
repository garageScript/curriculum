/**
 * Takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (a, b, c) => {
  let max = a > b? a : b;
  max = max > c? max : c;
  return max;
};

module.exports = {
  solution,
};
