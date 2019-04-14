/**
 * Takes in 2 functions, returns
 *   the sum of the result of calling the 2 functions
 * @param {function} a
 * @param {function} b
 * @param {number} c
 */

const solution = (a, b) => {
  return a() + b();
};

module.exports = {
  solution,
};
