/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (num,i=0, newStr="") => {
  if(i==num){
    return newStr;
  }
  return solution( num,i+1, newStr+"hello");
};

module.exports = {
  solution,
};
