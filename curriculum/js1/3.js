/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x, result="") => {
  if(x<=0) return result;
  return solution(x-1, result+="hello");
};

module.exports = {
  solution,
};
