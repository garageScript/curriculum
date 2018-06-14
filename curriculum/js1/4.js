/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (x, n, i=0, string ='') => {
  if (x===i) return string;
  string += n;

  return solution(x, n, i+1, string);
};

module.exports = {
  solution,
};

