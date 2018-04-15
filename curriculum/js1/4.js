/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b, c = 0) => {
  if (a === c) return '';
  return b + solution(a, b, c + 1);
};

module.exports = {
  solution,
};
