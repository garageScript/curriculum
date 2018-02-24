/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (a) => {
  return a.reduce((acc, x) => acc + x, 0);
};

module.exports = {
  solution,
};
