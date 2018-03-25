/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x, b = 0) => {
  if (b === x) return '';
  return 'hello' + solution(x, b + 1);
};

module.exports = {
  solution,
};
