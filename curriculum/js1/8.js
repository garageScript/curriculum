/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, divisor = 1, gcd = 1) => {
  if (divisor > a  || divisor > b) {
    return gcd;
  };
  if (a % divisor === 0 && b % divisor === 0) {
    gcd = divisor;
  }
  return solution(a, b, divisor + 1, gcd);
};

module.exports = {
  solution,
};
