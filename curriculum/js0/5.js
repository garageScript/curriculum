/**
 * Takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  }
  else if (b >c && b >c ) {
    return b;
  }
  else {
    return c;
  }
};

module.exports = {
  solution,
};
