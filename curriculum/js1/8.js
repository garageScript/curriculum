/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, c=Math.abs(b-a)) => {
  if (a===b) return a;
  if(b%c===0 && a%c===0) return c;
  return solution (a,b,c-1);
};

module.exports = {
  solution,
};
