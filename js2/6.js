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


const solution = (a, i = 0, newArr = []) => {
  if (i === a.length) return newArr;
  if (a[i] > 5) newArr.push(a[i]);
  return solution(a, i + 1, newArr);
};

module.exports = {
  solution,
};
