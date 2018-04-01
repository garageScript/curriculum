/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, count = a) => {
  if (a % count === 0 && b % count === 0) {
    return count;
  };
  count = count - 1;
  return solution(a, b, count);
};
module.exports = {
  solution,
};
