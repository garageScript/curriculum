/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, c = a + 1) => {
  if (c % 7 === 0) {
    return c;
  }
  c = c + 1;
  return solution(a, c);
};
module.exports = {
  solution,
};
