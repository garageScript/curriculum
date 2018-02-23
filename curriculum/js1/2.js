/**
 * Max 3 - takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

const solution = (a, b, c) => {
  if(a>b)
    return a;
  if(b>c)
    return b;
  if(c>a)
    return c;
  return solution(a,b,c)
};

module.exports = {
  solution,
};
