/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, i=0, ans=0) => {
  if(i>a || i>b){
    return ans;
  }
  if(a%i==0 && b%i==0){
    ans=i;
  }
  return solution(a,b,i+1,ans);
};

module.exports = {
  solution,
};
