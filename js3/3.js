/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

// The 4th test is wrong, it should only return [100]th

const solution = (arr, index = 0, obj = {}) => {
  // just use Object.keys => returns the keys of the object
  if (index === arr.length) {
    const result = Object.keys(obj);
    return result.filter((key) => obj[key] > 1);
  }
  obj[arr[index]] = (obj[arr[index]] || 0) + 1;
  return solution(arr, index + 1, obj);
}
module.exports = {
  solution,
};

// const solution = (arr, index = 0, obj = {}) => {
// just use Object.keys => returns the keys of the object
//   if (index === arr.length) {

//     const result = Object.keys(obj);
//     let letterArray = result.filter((key) => obj[key] > 1);
//     let result_arr = letterArray.map((stringNum) => parseInt(stringNum))
//     return result_arr;
//   }

//   if (obj[arr[index]] === undefined) {
//     obj[arr[index]] = 1
//   } else {
//     obj[arr[index]]++
//   }

//   return solution(arr, index + 1, obj);
// }