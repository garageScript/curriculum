/**
 * Max 3 - takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

const solution = (a, b, c) => {
  var max=larger(larger(a,b),c)
  return max;
};
function larger(a,b){
  if(a>=b){
    return a
  }
  return b
}

module.exports = {
  solution,
};
