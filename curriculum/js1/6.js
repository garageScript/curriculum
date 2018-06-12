/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, b = 2, sum = 0) => {
  if (a < 2 || b === a) return sum;
  if (a % b === 0) sum += b;
  return solution(a, b + 1, sum);
};

module.exports = {
  solution,
};
