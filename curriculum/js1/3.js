/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b) => {
  if(b === undefined){
    b = "";
  }
  if(a == 0){
    return b;
  }
  else{
    a = a-1;
    b = b + "hello";
    return  solution(a, b);
  }

};

module.exports = {
  solution,
};
