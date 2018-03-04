/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b) => {
  if (a === 0) return;
  b();
  return solution(a-1,b)
};

module.exports = {
  solution,
};
