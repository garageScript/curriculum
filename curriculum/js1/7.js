/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, orig = a, prime = true) => {
  a = a - 1;

  if (a <= 0) {
    return false;
  }

  if (orig == 2) {
    return true;
  }

  if (orig % a == 0) {
    prime = false;
  }

  if (a == 2) {
    if (prime) {
      return true;
    } else {
      return false;
    }
  }

  return solution(a, orig, prime);
};

module.exports = {
  solution,
};
