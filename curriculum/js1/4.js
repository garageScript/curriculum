/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

 const solution = (x, word, output='', i=0) => {
   if(x<=i) return output;
   return solution(x, word, output+word, i+1);
};

module.exports = {
  solution,
};
