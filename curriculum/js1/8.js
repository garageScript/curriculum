/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (num1, num2, min = Math.min(num1, num2)) => {
  if (min === 1) return 1;
  if (num1 % min === 0 && num2 % min === 0) return min;
  return solution(num1, num2, min - 1);
};

module.exports = {
  solution,
};
