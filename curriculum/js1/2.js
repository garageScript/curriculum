/**
 * Takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (a, b, c) => {
  if (a > b){
    if(a > c){
      return a;
    }
    else{
      return c
    }
  }
  else if(c > b){
    return c;
  }
  else{
    return b;
  }
};

module.exports = {
  solution,
};
