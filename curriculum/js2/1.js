/**
 * Given an array, return the same array where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a, loopCount = a.length - 1) => {
  if (loopCount < 0) return a;
  if (a[loopCount] <= 5) a[loopCount] = 0;
  return solution(a, loopCount - 1);
};

module.exports = {
  solution,
};
