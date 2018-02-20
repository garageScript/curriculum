/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (count, i = 0, result = '') => {
  if (i === count) return result;
  return solution(count, i + 1, result + 'hello');
};

module.exports = {
  solution,
};
