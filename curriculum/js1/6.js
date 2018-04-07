/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, n=2, found = false) => {
  if ((a < 2) || (a === n))
    return 0;

  if (!(a % n)) {
      found = true;
      return (n + solution(a, n+1, found));
  }
  else
      return solution(a, n+1, found);
};

module.exports = {
  solution,
};
