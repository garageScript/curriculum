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
  newStr=newStr+"hello ";
  return solution( num,i+1, newStr);
};

module.exports = {
  solution,
};
