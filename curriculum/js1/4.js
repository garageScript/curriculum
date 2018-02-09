/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b) => {
  if (a == 1) {
    return b;
  }

  if (a == 0) {
    return '';
  }

  let new_string = b + solution(a - 1, b);
  return new_string;
};

module.exports = {
  solution,
};
