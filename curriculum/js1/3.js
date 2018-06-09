/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b='') => {
  if (a === 0) {return b};
  return solution(a-1,b + "hello");
};

module.exports = {
  solution,
};
