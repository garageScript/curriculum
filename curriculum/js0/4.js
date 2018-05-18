/**
 * Takes in 2 numbers, returns the larger number
 * @param {number} a
 * @returns {number}
 */

const solution = (a, b) => {
  if ( a > b ) {
    return a;
  }
  return b;
};

module.exports = {
  solution,
};
