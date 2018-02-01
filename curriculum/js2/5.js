/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (a) => {
  if(a.length == 0) return ''; 
  return Math.max(...a);
};

module.exports = {
  solution,
};
