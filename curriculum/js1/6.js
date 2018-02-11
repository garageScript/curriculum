/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (num, i = Math.floor(num/2), sum = 0) => {
  if (i <= 1) return sum;
  if (num % i === 0) sum += i;
  return solution(num, i-1, sum);
};

module.exports = {
  solution,
};
