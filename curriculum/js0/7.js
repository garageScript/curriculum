/**
 * Takes in 2 numbers, return true if their sum is greater than 10
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (a, b) => {
  if (a + b > 10) {
    return true;
  }
  return false;
};

module.exports = {
  solution,
};
