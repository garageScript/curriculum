/**
 * Given an array, return the same array
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a, i = 0) => {
  if (a.length === i) return a;
  a[i] = a[i] % 2 !== 0 ? 0 : a[i];
  return solution(a, i + 1);
};

module.exports = {
  solution,
};
