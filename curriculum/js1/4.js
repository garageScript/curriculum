/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b='', input = b) => {
  if( a == 1 ){
    return b;
  }
  else{ 
    b = b + input;
    return solution(a-1, b , input);
  }
};

module.exports = {
  solution,
};
