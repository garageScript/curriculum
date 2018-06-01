/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a,b=2,c=0)=> {
  if (b===a) return c;
  if (a%b===0) c=c+b;
  return solution (a,b+1,c);
};

module.exports = {
  solution,
};
