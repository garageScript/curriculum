/**
 *
 *
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (num) => {
  if (num === 0) {
    return '';
  }
  if (num === 1) {
    return 'hello';
  }
  return 'hello' + solution(num-1);
};
module.exports = {
  solution,
};
