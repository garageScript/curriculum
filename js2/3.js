/**
 * Given an array, return the same array
 *   where all elements that are not prime are changed to 1
 *   Please reuse your js1 solution
 * @param {array} a
 * @returns {array}
 */

const isPrime = require('../js1/7.js').solution;

// FOR LOOP

// const solution = (a) => {
// let arr = [];

//   for (var i = 0; i < a.length; i++) {
//     if (isPrime(a[i])){
//       arr.push(a[i]);
//     } else {
//       arr.push(1);
//     }
//   }
//   return arr;
// }

// WHILE LOOP

// const solution = (a) => {
//   let arr = [];
//   let i = 0;

//   while (i < a.length) {
//     if (isPrime(a[i])) {
//       arr.push(a[i]);
//     } else {
//       arr.push(1);
//     }
//     i++;
//   }
//   return arr;
// }

  // RECURSION 

const solution = (a, i = 0) => {
  if (i === a.length) return a
  if (!isPrime(a[i])) { a[i] = 1 }
  return solution(a, i + 1)
}

module.exports = {
  solution,
};
