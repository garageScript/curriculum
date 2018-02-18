/**
 * Max 3 - takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

const solution = (a, b, c) => {
  var largest = 0;
  if(a>b){
    largest = a;
  }else{
    largest = b;
  }
  if(c > largest){
    largest = c;
  }
  return largest;
};

module.exports = {
  solution,
};
