/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, i = 0) => {
 if (i === a) return '';
  return 'hello' + solution(a, i + 1);
  };

module.exports = {
  solution,
};
