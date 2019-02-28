/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

// FOR LOOP

// const solution = (a) => {
//   let sum = 0;
//   for (var i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   return sum;
// };

// WHILE LOOP

// const solution = (a) => {
//   let i = 0;
//   let sum = 0;
//   while (i < a.length) {
//     sum += a[i];
//     i++;
//   }
// return sum;
// }

// RECURSION 

const solution = (a, i = 0, sum = 0) => {
  if (i === a.length) { return sum; }
  return solution(a, i + 1, sum+=a[i]);
}

module.exports = {
  solution,
};
