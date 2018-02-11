/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (num, halfNum = Math.floor(num/2)) => {
  if(!(num % halfNum)) return halfNum === 1;
  return solution(num, halfNum - 1);
};

module.exports = {
  solution,
};
