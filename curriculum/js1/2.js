/**
 * Max 3 - takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

const solution = (a, b, c) => {
  return ( (a > b) ? ( (a > c) ? a : c ) : ( (b > c) ? b : c ) );
}

module.exports = {
  solution,
};
