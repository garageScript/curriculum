
/**
 * Given an array, return the same array
 *   where all elements that are not prime are changed to 1
 *   Please reuse your js1 solution
 * @param {array} a
 * @returns {array}
 */

const prime = require('../js1/7.js');

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

const solution = (a, b = [], c = 0) => {
  if (b.length === a.length) { return b; }
  if (isPrime(a[c])){
    b.push(a[c])
  } else {
    b.push(1);
  }
  return solution(a, b, c+1);
};

// console.log(solution([])); // []
// console.log("----");
// console.log(solution([6, 7])); // [1, 7]
// console.log("----");
// console.log(solution([3, 13])); // [3, 13]
// console.log("----");
// console.log(solution([3, 8, 5])); // [3, 1, 5]

module.exports = {
  solution,
};