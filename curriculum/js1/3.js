/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a) => {
  let result = '';
  for (let i = 0; i < a; i++) {
  result += 'hello'
  }
  return result;
 ;
};
console.log(solution(6))

module.exports = {
  solution,
};
