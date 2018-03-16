/**
 * Given an array, return an array of the same length
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a, idx = 0, res = []) => {
  if (a.length === idx) return res;
  res[idx] = a[idx] % 2 ? 0 : a[idx];
  return solution(a, idx + 1, res);
};

module.exports = {
  solution,
};
