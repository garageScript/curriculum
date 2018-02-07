/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, stringIN, stringOut='',i=0) => {
  if(i==n){
    return stringOut;
  }
  stringOut= stringOut+ stringIN;
  return solution(n, stringIN, stringOut, i+1);
};

module.exports = {
  solution,
};
