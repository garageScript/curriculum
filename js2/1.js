/**
 * Given an array, return the same array where
 *   all elements <= 5 are changed to 0
 * @param {array} a
 * @returns {array}
 */

// FOR LOOP

// const solution = (a) => {
//   let arr = [];

//   for (var i = 0; i < a.length; i++) {
//     if (a[i] <= 5){
//       arr.push(0)
//     } else {
//       arr.push(a[i]);
//     }
//   }
//   return arr;
// };

// WHILE LOOP

// const solution = (a) => {
//   let arr = [];
//   i = 0;

//   while (i < a.length) {
//     if (a[i] <= 5) {
//       arr.push(0);
//     } else {
//       arr.push(a[i]);
//     }
//     i++;
//   }
//   return arr;
// }

// RECURSION 

const solution = (a, i = 0) => {
  if (i === a.length) return a
  if (a[i] <= 5) { a[i] = 0 }
  return solution(a, i + 1);
};

// ALTERNATIVE

module.exports = {
  solution,
};
