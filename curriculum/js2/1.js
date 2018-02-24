/**
 * Given an array, return array of the same length where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return a.map(x => x > 5 ? x : 0);
};

module.exports = {
  solution,
};
