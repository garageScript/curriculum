/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  a = a + 1;

  if (a % 7 == 0) {
    return a;
  }

  return solution(a);
};

module.exports = {
  solution,
};
