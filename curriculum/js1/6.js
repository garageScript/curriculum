/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (num, sum=0, i=2) => {
  if(i==num){
    return sum;
  }
  if(num%i==0){
    sum =sum+i;
  }
  return solution(num,sum, i+1);
};

module.exports = {
  solution,
};

