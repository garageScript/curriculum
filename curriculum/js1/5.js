/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b) => {
  for (let i = 0; a > i; i++) {
   b();
  }
  return 0;
};

module.exports = {
  solution,
};
