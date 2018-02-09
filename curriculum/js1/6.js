/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, orig = a) => {
  n = a - 1;
  if (n === 2) {
    if (orig % 2 == 0) {
      return 2;
    } else {
      return 0;
    }
  }

  if (orig % n === 0) {
    return n + solution(n, orig);
  } else {
    return 0 + solution(n, orig);
  }
};

module.exports = {
  solution,
};
