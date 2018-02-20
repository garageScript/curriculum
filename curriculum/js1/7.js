/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, b = 2) => {
  if (a < 2 || (a > 2 && a % b === 0)) return false;
  if (b > Math.sqrt(a)) return true;
  return solution(a, b + 1);
};

module.exports = {
  solution,
};
