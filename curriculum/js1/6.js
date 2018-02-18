/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, sum = 0, num = 2) => {
  if (num >= a) {
    return sum;
  }

  if (a % num === 0) {
    return solution(a, sum + num, num + 1);
  } else {
    return solution(a, sum, num + 1);
  }
};

module.exports = {
  solution,
};
