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
console.log(solution([1, 2, 2, 3, 4, 4, 4])); // 4
console.log("----");
console.log(solution([-1, -1, -1, 2, 2, 5, 5])); // -1
console.log("----");
console.log(solution([0, 0, 1, 2, 4, 0])); // 0
console.log("----");
console.log(solution([0, 10, 10, 10, 20, 20, 20, 20, 0, 100, 100])); // 20
console.log("----");
console.log(solution([4, 1, 4, 2, 2, 3, 4])); // 4