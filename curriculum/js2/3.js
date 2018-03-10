/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

isPrime=require("../js1/7.js").solution;

const solution = (a,idx=0,res=[]) => {
  if(idx===a.length) return res;
  res[idx]=isPrime(Math.abs(a[idx]))?a[idx]:1;
  return solution(a,idx+1,res);
};

module.exports = {
  solution,
};
