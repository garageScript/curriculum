/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, b, i = 0, ans = 0) => {
  if (i === a.length) return ans;
  if (a[i] === b) ans += 1;
  return solution(a,b,i+1,ans);

};

module.exports = {
  solution,
};
