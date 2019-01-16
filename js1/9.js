/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

// FOR LOOP

// const solution = (a) => {
//     for (let i = a + 1; true; i++) {
//           if (i % 7 === 0) {
//                   return i;
//                 }
//         }
// };

// WHILE LOOP

// const solution = (a) => {
//   i = a + 1;
//   while (true) {
//     if (i % 7 === 0) {
//       return i;
//     }
//     i++;
//   }
// }

// RECURSION

const solution = (a, b = a + 1) => {
  if (b % 7 === 0) return b;
  return solution(a, b+1);
}


// console.log(solution(1)); // 7
// console.log(solution(14)); // 21
// console.log(solution(21)); // 28
// console.log(solution(28)); // 35

module.exports = {
  solution,
};