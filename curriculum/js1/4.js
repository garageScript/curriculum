/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b = '', c = b) => {
  if (a == 1) {
    return b;
  }

  return solution(a - 1, b + c, c);
};

module.exports = {
  solution,
};
