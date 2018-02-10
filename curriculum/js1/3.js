/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b = 'hello') => {
  if (a == 1) {
    return b;
  }

  if (a == 0) {
    return '';
  }

  return solution(a - 1, b + 'hello');
};

module.exports = {
  solution,
};
