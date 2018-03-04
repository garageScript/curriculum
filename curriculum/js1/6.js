/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, b=a-1, c=0) => {
  if (b<=1) {
    return c;
  }
  if ((a%b)===0) {
    return solution(a, b-1, c+b)
  }
  return solution(a,b-1,c)
 
};

module.exports = {
  solution,
};
