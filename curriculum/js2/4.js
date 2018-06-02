/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (a,i = 0, sum = 0) => {
  if (i === a.length ) return a;
  sum += a[i];
  return solution(a,i+1,sum);
};

module.exports = {
  solution,
};
