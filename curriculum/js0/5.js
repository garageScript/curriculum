/**
 * Takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (a, b, c) => {
  if (a > b && b > c){
    return a
  } else if (c > b && c > a){
    return c
  } else {
    return b;
  };
};

module.exports = {
  solution,
};
