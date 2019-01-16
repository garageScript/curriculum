/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

// FOR LOOP 

// const solution = (a, b) => {
//   let count = 0;

//   for (var i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//       count++;
//     }
//   }
//   return count;
// };

// WHILE LOOP

// const solution = (a, b) => {
//   let count = 0;
//   i = 0;

//   while (i < a.length) {
//     if (a[i] === b) {
//       count++;
//     }
//     i++;
//   }
//   return count;
// }

// RECURSION

const solution = (a, b, c = 0, d = 0) => {
  if (c === a.length) { return d; }
  if (a[c] === b) { d++; }
  return solution(a, b, c+1, d);
}

module.exports = {
  solution,
};