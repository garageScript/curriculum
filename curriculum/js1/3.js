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
  if (a === 0) {
    return b;
  }
  b += 'hello';
  return solution(a - 1, b);
};

console.log(solution(0)); // ''
console.log(solution(3)); // hellohellohello
console.log(solution(4)); // hellohellohellohello
console.log(solution(5)); // hellohellohellohellohello