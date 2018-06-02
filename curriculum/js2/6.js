/**
 * Given an array, return a new array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a,i = 0,i2 = 0, ans = []) => {
  if (a.length === i) return ans;
  if (a[i] > 5) {
    ans[i2] = a[i];
    i2 +=1;}
  return solution(a,i+1,i2,ans);
};

module.exports = {
  solution,
};
