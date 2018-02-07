/*
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a,b="hello",output="",i=0) => {
  if(a<i+1)return output;
  output=output+b;
  return solution(a,b,output,i+1)
};
module.exports = {
  solution,
};
