/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, n=2) => {
  if (a < 2)
    return false;

  if (a === n)
    return true;

  if ((a % n) === 0)
    return false;

  return solution(a, n+1);
};

module.exports = {
  solution,
};
