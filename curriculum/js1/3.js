/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (num, newStr="") => {
  if(num==0){
    return newStr;
  }
  return solution( num-1, newStr+"hello");
};

module.exports = {
  solution,
};
