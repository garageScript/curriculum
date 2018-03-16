/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution=(a)=>{
  if (a.length==0) return null;
  return a.reduce((max, x) => x > max ? x : max, a[0])
};

module.exports = {
  solution,
};
