/**
 * Takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (a, b, c) => {
  if (a >= b && b >=c ){
    return a;
  }
  if(b >= a && a >=c ){
    return b
  }
  return c;
};

module.exports = {
  solution,
};
