/**
 * Max 3 - takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

const solution = (a, b, c) => {
  return larger(larger(a,b),c);
};
const larger = (a,b) => {
  if(a>=b){
    return a
  }
  return b
}

module.exports = {
  solution,
};
