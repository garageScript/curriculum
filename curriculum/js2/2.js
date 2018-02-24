/**
 * Given an array, return an array of the same length
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return a.map(x => x % 2 ? 0 : x);
};

module.exports = {
  solution,
};
