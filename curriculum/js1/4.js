/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (num, str, temp = '') => {
  if (num <= 0) return temp;
  temp += str;
  return solution(num - 1, str, temp);
};
console.log(solution(3, 'hi'));
module.exports = {
  solution,
};
