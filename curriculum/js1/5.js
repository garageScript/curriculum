/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b, result = '') => {
  if (a === 0) {
    return result;
  }
  b();
  return solution(a - 1, b, b + result);
};

module.exports = {
  solution,
};
