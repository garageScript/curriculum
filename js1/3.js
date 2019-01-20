/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

// FOR LOOP

// const solution = (a, b = '') => {
//   if (a === 0) {
//     return '';
//   }
//   for (var i = 0; i < a; i++) {
//     b += 'hello';
//   }
//   return b;
// };



// WHILE LOOP

// const solution = (a, b = '') => {
//   i = 0;
//     while (i < a) {
//       b += 'hello';
//       i++;
//     }
//   return b;
// }


// RECURSION 

const solution = (a, b = '') => {
  return b if a === 0;
  b += 'hello';
  return solution(a - 1, b);
};

console.log(solution(6));

// module.exports = {
//   solution,
// };