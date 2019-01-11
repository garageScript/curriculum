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

const solution = (arr, i = 0, obj = {}) => {
  if (i === arr.length) { 
  max = Math.max.apply(null, Object.values(obj));
  // console.log("​Math.max.apply(null, Object.values(obj)", Math.max.apply(null, Object.values(obj))
  return Object.values(obj).indexOf(max);
  }

  if (obj[arr[i]]) {
    obj[arr[i]]++;
  } else {
    obj[arr[i]] = 1;
  }

  console.log("arr = ", arr);
  console.log("obj = ", obj);
  console.log("i = ", i);

  return solution(arr, i + 1, obj);
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