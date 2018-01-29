/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, arr=[],i=1) => {
  if(a>b){
    if(i>b) return Math.max(...arr);
  }else{
    if(i>a) return Math.max(...arr);
  };
  if(a%i==0 && b%i==0)arr.push(i)
return solution(a, b, arr, i+1);
}
module.exports = {
  solution,
};
