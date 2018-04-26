/*
 * repeatingElements - takes in array of numbers,
 * return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (a, i=0, j=i+1, o={}, r=[])=>{
  if (i === a.length) return r;
  if (a[i] === a[j] && !r.includes(a[i])) r.push(a[i]);
  if (j === a.length) return solution(a, i+1, j=i+1, o, r);
  console.log(r);
  return solution(a, i, j+1, o, r);
};

module.exports = {
  solution,
};
