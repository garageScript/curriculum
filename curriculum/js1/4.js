/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (x, string = "") => {
   if (1 < x) {
       x -= 1;
       console.log(string);
       return solution(x, string) + string;
   } else {
       console.log(string);
	   return string;
   }
};

module.exports = {
  solution,
};
