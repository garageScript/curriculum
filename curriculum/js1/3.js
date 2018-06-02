/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a = 5, b ='', x=0) => {
  if (a === x ) return b;
  b += 'hello';
  return solution(a, b, ++x);
};

module.exports = {
  solution,
};
