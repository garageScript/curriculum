/*i*
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, c = '') => {
   
   if(a == 0) {
    return c
   }
   console.log(c)
   return solution(a-1,c + 'hello');
  };

module.exports = {
  solution
}
