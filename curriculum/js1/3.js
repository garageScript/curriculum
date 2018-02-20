/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} count
 * @returns {string}
 */

const solution = (count, result = '') => {
  if (count === 0) return result;
  return solution(count - 1, result + 'hello');
};

module.exports = {
  solution,
};
