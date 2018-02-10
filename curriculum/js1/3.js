/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x) => {
  if(x<=0){
    return ""
  }
  return solution(x-1)+"hello";
};

module.exports = {
  solution,
};
