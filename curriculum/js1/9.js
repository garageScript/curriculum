/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  let remainder = a % 7;
  let nextSeven = a + 7 - remainder;
  return nextSeven;
};

module.exports = {
  solution,
};
