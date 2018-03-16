/**
 * Given an array, return an array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a, idx = 0, res = []) => {
  if (a.length === idx) return res;
  if (a[idx] > 5) res.push(a[idx])
  return solution(a, idx + 1, res);
};

module.exports = {
  solution,
};
