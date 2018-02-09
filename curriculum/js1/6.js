/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  var sumOfDivisor = 0;
  for(let i=2;i<a;i++){
    if(a%i==0){
      sumOfDivisor+=i;
    }
  }
  return sumOfDivisor;
};

module.exports = {
  solution,
};
