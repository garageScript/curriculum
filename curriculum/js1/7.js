/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, c = 2) => {
  if (a === c) {
    return true;
  }
  if (a < 2) {
    return false;
  }
  if (a % c === 0) {
   return false;
  }
  c = c + 1;
  return solution(a, c);
 };

module.exports = {
  solution,
};
