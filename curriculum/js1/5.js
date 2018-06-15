/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b, i=0) => {
  if (a===i) return;
  b();
  return solution(a, b, i+1);
};
module.exports = {
  solution,
};


