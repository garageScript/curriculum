/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, b, idx = 0, res = 0) => {
  if (a.length === idx) return res;
  if (a[idx] === b) res += 1;
  return solution(a, b, idx + 1, res);
};

module.exports = {
  solution,
};