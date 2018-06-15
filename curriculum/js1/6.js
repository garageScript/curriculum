/* getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, sum=0, i=2) => {
  if (a===i) return sum;
  if (a%i===0) sum =sum + i;
  return solution(a, sum, i+1);
};

module.exports = {
  solution,
};
