/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, b = 1) => {
  if ((a + b) % 7 === 0) return a + b;
  return solution(a, b + 1);
};

module.exports = {
  solution,
};
