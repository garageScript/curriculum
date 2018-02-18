/**
 * Given an array, return an array of the same length
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a, idx = 0) => {
  if (idx == a.length) {
    return a;
  }

  if (Math.abs(a[idx]) % 2 === 1) {
    a[idx] = 0;
  }

  return solution(a, idx + 1);
};

module.exports = {
  solution,
};
