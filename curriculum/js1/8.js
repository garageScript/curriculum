/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, i=Math.max(a,b)) => {
  if (a%i===0 && b%i===0) return i;
  return solution(a, b, i-1)
};

module.exports = {
  solution,
};
