/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, curr=2) => {
  if(a<=1) return false;
  if(curr>=a) return true;
  if(a%curr==0) return false;
  return solution(a,curr+1);
};

module.exports = {
  solution,
};
