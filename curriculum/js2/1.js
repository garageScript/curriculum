/**
 * Given an array, return the same array where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a, i = 0) => {
  if (a.length === i) return a;
  a[i] = a[i] <= 5 ? 0 : a[i];
  return solution(a, i + 1);
};

module.exports = {
  solution,
};
