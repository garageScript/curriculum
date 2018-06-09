/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, b = 2) => {
  if ( a === 1) {return false} ;
  if ( b * b > a) {return true } ;
  if ( a % b === 0 ) {return false} ;
  return solution(a, b + 1);
}

module.exports = {
  solution,
};
