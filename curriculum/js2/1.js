/**
 * Given an array, return array of the same length where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a, idx = 0, res = []) => {
  if (idx == a.length) return res;
  if (a[idx] > 5) {
    res[idx] = a[idx];
  } else {
    res[idx] = 0;
  }
  return solution(a, idx + 1, res);
};

module.exports = {
  solution,
};