/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b) => {
  if (!a)
    return '';

  return "hello" + solution(a-1,b);
};

module.exports = {
  solution,
};
