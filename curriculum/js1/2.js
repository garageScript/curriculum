/**
 * Takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (a, b, c) => {
  if (a>b){
    if(b>c){
      return a;
    }
    if(b<c){
      return c;
    }
  }
  if(a<b){
    if(b<c){
      return c;
    }
    if(b>c){
      return b;
    }
  }
};

module.exports = {
  solution,
};
