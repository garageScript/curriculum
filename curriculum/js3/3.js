/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

// The 4th test is wrong, it should only return [100]th

const solution = (arr, index = 0, obj = {}) => {
  // just use Object.keys => returns the keys of the object
  if (index === arr.length) {

    let result = Object.keys(obj);
    let letterArray = result.filter((key) => obj[key] > 1);
    let result_arr = letterArray.map((stringNum) => parseInt(stringNum))
    return result_arr;
  }

  if (obj[arr[index]] === undefined) {
    obj[arr[index]] = 1
  } else {
    obj[arr[index]]++
  }

  return solution(arr, index + 1, obj);
}


console.log(solution([1, 2, 2, 3, 4, 4, 4])); // [2, 4]
console.log("----");
console.log(solution([-1, -1, -1, 2, 2, 5, 5])); // [2, 5, -1];
console.log("----");
console.log(solution([0, 0, 1, 2, 4, 0])); // [0]
console.log("----");
console.log(solution([0, 100, 20, 100])); // [100];