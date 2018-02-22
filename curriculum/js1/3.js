/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x, i=0, output='') => {
  if(i>=x) return output;
  return solution(x, i+1, output+'hello');
};

module.exports = {
  solution,
};
