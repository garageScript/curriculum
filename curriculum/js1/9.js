/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, next=a+1) => {
  if (next%7===0) return next;
  return solution(a,next+1);
};

module.exports = {
  solution,
};
