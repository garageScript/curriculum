/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, min = b) => {
  min = Math.min(a, b, min);

  if (min == 0) {
    return null;
  }

  if (a % min == 0 && b % min == 0) {
    return min;
  }

  return solution(a, b, min - 1);
};

console.log(solution(6, 15));

module.exports = {
  solution,
};
