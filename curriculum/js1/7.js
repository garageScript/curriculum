/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, orig = a) => {
  a = a - 1;

  if (a == 1) {
    return true;
  }

  if (orig % a == 0) {
    return false;
  }

  return solution(a, orig);
};

module.exports = {
  solution,
};
