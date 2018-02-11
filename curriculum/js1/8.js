/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, curr=2, gcd=1) => {//assuming positive integers
  if(curr>a || curr>b) return gcd;
  if(a%curr===0 && b%curr===0) gcd=curr;
  return solution(a, b, curr+1, gcd);
};

module.exports = {
  solution,
};
