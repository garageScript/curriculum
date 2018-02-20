/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, c = 1, gcd = 1) => {
  if (c > Math.abs(a) || c > Math.abs(b)) return gcd;
  if (a % c === 0 && b % c === 0) gcd = c;
  return solution(a, b, c + 1, gcd);
};

module.exports = {
  solution,
};
