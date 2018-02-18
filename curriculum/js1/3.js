/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x) => {
   if (x < 0 || x === 0){
     return "";
   }
   if (x > 0){
     return "hello"+solution(x-1);
   }
};

module.exports = {
  solution,
};
