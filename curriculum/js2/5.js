/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (a,i=0,largest = '') => {
  if (i === a.length) return largest;
  if (a[i] > largest || largest === '') largest = a[i];
  return solution(a,i+1,largest);
};

module.exports = {
  solution,
};
