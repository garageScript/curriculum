/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b, c = 0) => {
  if (a === c) {
    return '';
  }
  b();
  c = c + 1;
  return solution(a, b, c);
};

module.exports = {
  solution,
};
