/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (x, sum=0, i=2) => {
  if(i >= x) return sum;
  if (x%i === 0){
    sum=sum+i;
  }
  return solution(x,sum,i+1);
}
module.exports = {
  solution,
};
