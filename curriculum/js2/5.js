/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (a) => {
  if(!a.length) return null;
  var max=a[0]
  a.forEach(x=>{if(x>max) max=x;})
  return max;
};

module.exports = {
  solution,
};
