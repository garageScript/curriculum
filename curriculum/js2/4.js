/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (a, idx = 0, sum = 0) => {
  if (idx === a.length) {
    return a.length == 0 ? '' : sum;
  }
  return solution(a, idx + 1, sum + a[idx]);
};

module.exports = {
  solution,
};
