/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, ans=1,i=1) => {
  
    if(i>b || i>a) return ans; 
  if(a%i==0 && b%i==0)ans = i;
return solution(a, b, ans, i+1);
}
module.exports = {
  solution,
};
