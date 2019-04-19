/**
 * Takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (a, b, c) => {
      // 3 4 4
if (a > b && a > c)
  return a;

if (b > c )
  return b;
return c;
};

module.exports = {
  solution,
};
