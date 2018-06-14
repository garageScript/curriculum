/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x, i=0, result ='') => {
  if (x===i) return result;
  result +='hello';
  return solution(x, i+1, result);
};

module.exports = {
  solution,
};
