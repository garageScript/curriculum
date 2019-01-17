/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @return {number}
 */

// FOR LOOPS

// const solution = (arr) => {
//   let obj = {};
//   for (var i = 0; i < arr.length; i++) {
//     if ((obj[arr[i]])) {
//       obj[arr[i]]++;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }
//   let max = 0
//   for (key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//     }
//   }
//   return key;
// };

// RECURSION 

const solution = (arr, i = 0, obj = {}, max = arr[0]) => {

  if (i === arr.length) return max;
  obj[arr[i]] = (obj[arr[i]] || 0) + 1;

  if (obj[max] < obj[arr[i]]) {
    max = arr[i]
  }

  return solution(arr, i + 1, obj, max);
}
module.exports = {
  solution,
};