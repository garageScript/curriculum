/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, curr=2, sumOfDivisor=0) => {
  if (curr>=a) return sumOfDivisor;
  if (a%curr==0) sumOfDivisor+=curr;
  return solution(a,curr+1,sumOfDivisor);
};

module.exports = {
  solution,
};
