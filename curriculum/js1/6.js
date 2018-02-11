/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, sum = 0, orig = a) => {
  n = a - 1;
  if (n === 2) {
    let final_sum = 0;
    if (orig % 2 === 0) {
      final_sum = 2;
    }
    return final_sum + sum;
  }

  if (orig % n === 0) {
    return solution(n, sum + n, orig);
  } else {
    return solution(n, sum, orig);
  }
};

module.exports = {
  solution,
};
