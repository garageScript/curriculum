/**
 * Max 3 - takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (a, b, c) => {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  if (c > a && c > b) return c;
  return a;
};

module.exports = {
  solution,
};
