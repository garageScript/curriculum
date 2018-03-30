/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (x, str, newStr = "") => {
  if(x === 0){
    return newStr;
  };
  return solution( (x - 1) , str, newStr + str);
};

module.exports = {
  solution,
};
