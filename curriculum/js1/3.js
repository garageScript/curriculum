/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (num, str='') => {
  if (num <= 0) return str;
  str += 'hello';
  return solution(num-1, str);
};

module.exports = {
  solution,
};
