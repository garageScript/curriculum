/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (x, i=2) => {
  if (x===1) return false;
  if (i >= x -1) return true;
  if (!(x%i)) return false;
  return solution(x,i+1);
};

module.exports = {
  solution,
};
