/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b) => {
  const printString = (num, str) => {
  let result="";
  for(let i=1; i<=num; i++){
    result+=str;
  }
  return result;
}
  return printString();
};

module.exports = {
  solution,
};
