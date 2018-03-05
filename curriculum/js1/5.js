/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (x, func, i=0) => {
  if (i >= x) return;
  func();
  return solution(x, func, i+1);
};

module.exports = {
  solution,
};
