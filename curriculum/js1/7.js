/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (num, i=2) => {
  if(num==i){
    return true;
  }
  if(num%i==0){
    return false;
  }
  return solution(num, i+1);
};

module.exports = {
  solution,
};
