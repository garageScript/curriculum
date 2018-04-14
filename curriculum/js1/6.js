/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, i = 2, sum = 0) => {
  if (i === a) {
    return sum;
  }
  if (a % i === 0) {
    sum += i;
  }
  i = i + 1;
  return solution(a, i, sum);
};
module.exports = {
  solution,
};
