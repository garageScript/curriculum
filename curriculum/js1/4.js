/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b, output="",i=0) => {
  if(a==i) return output;
  output=output+b;
  return solution(a,b,output,i+1);
};
module.exports = {
  solution,
};
