/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, min = '') => {
  if (!min) {
    min = Math.min(a, b);
  }

  if (min == 0) {
    return null;
  }

  if (a % min == 0 && b % min == 0) {
    return min;
  }

  return solution(a, b, min - 1);
};

module.exports = {
  solution,
};
