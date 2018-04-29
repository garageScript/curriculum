/*
 * repeatingElements - takes in array of numbers,
 * return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (a, i=0, o={})=>{
  if (i === a.length) {
    return Object.keys(o).filter( (k) => o[k] >= 2).map(Number);
  }
  if (i < a.length && !o[a[i]]) o[a[i]] = 0;
  o[a[i]] += 1;
  return solution(a, i+1, o);
};

module.exports = {
  solution,
};
