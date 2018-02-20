/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  var denominator = 1;
  var temp;
  if(a > b){
    temp = a;
  }else{
    temp = b;
  }
  for(var i=1; i<=temp; i++){
    if(a%i == 0 && b%i == 0){
      if(denominator < i){
        denominator = i;
      }
    }
  }
  return denominator;
};

module.exports = {
  solution,
};
