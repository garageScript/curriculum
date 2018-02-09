/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  var min=a;
  if(a>b){
    min=b;
  }
  for(let i=min;i>=1;i--){
    if(a%i==0 && b%i==0){
      return i;
    }
  }
};

module.exports = {
  solution,
};
