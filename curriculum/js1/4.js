/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, str, result="") => {
  if(n<=0) return result;
  return solution(n-1, str, result+str);
};

module.exports = {
  solution,
};
