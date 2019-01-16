/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

// FOR LOOP

// const solution = (a) => {
// let high = a[0];

//   for (var i = 0; i < a.length; i++) {
//     if (a[i] > high) {
//       high = a[i];
//     }
//   }
//   return high;
// };

// WHILE LOOP

// const solution = (a) => {
//   let high = a[0];
//   i = 0;

//   while (i < a.length) {
//     if (a[i] > high) {
//       high = a[i];
//     }
//     i++;
//   }
//   return high;
// }

// RECURSION

const solution = (a, b = a[0], c = 0) => {
  if (c === a.length) { return b; }
  if (a[c] > b) { b = a[c]; }
  return solution(a, b, c+1);
}

module.exports = {
  solution,
};