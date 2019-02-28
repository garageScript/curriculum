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

const solution = (a, b, i = 0, count = 0) => {
  if (i === a.length) return count;
  if (a[i] === b) count++;
  return solution(a, b, i+1, count);
}

module.exports = {
  solution,
};
