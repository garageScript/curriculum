/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  if ((a + 1) % 7 === 0) return a + 1;
  return solution(a + 1);
};

module.exports = {
  solution,
};
