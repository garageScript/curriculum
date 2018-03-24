/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b) => {
  if (a === b) return a;
  return a + solution(a, b++);
};

module.exports = {
  solution,
};
