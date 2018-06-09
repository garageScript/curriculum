/**
 * Given an array, return the same array
 *   where all elements that are not prime is changed to 1
 *   Please reuse your js1 solution
 * @param {array} a
 * @returns {array}
 */

isPrime = require('../js1/7.js').solution;

const solution = (a,ind = 0) => {
  if (ind === a.length) return a;
  if (!isPrime(a[ind])) a[ind] = 1;
  return solution(a,ind + 1);
};

module.exports = {
  solution,
};
