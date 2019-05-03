/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

// FOR LOOP 

// const solution = (a, b) => {
//   let str = '';
//   for (var i = 0; i < a; i++) {
//     str += b;
//   }
//   return str;
// };


// WHILE LOOP 

// const solution = (a, b) => {
//   let str = '';

//   i = 0;
//   while (i < a) {
//     str += b;
//     i++;
//   }
//   return str;
// };

// RECURSION 

const solution = (num, str) => {
  if (num === 0) return ""
  console.log(str.repeat(num))
  return str + solution(num - 1, str);
};

module.exports = {
  solution,
};
