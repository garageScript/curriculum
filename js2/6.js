/**
 * Given an array, return a new array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

// FOR LOOP

// const solution = (a) => {
//   let arr = [];

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > 5) {
//       arr.push(a[i]);
//     }
//   }
//   return arr;
// };  

// WHILE LOOP

// const solution = (a) => {
//   let arr = [];
//   let i = 0;

//   while(i < a.length) {
//     if (a[i] > 5){
//       arr.push(a[i]);
//     }
//     i++;
//   }
//   return arr;
// }

// RECURSION


const solution = (a, b = [], c = 0) => {
  if (c === a.length) { return b; }
  if (a[c] > 5) { b.push(a[c]); }
  return solution(a, b, c+1);
};

module.exports = {
  solution,
};