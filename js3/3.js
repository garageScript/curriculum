/**
 * repeatingElements - takes in array of numbers,
 * return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
**/

/*
// RECURSION 1
const solution = (arr, i = 0, obj = {}, newArr = []) => {
  if (i === arr.length) { return newArr }
  obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  if (obj[arr[i]] > 1) { newArr.push(arr[i]) }
  return solution(arr, i + 1, obj, newArr);
};
*/

// RECURSION 2
const solution = (arr, index = 0, obj = {}) => {
  if (index === arr.length) {
    const result = Object.keys(obj);
    const letterArray = result.filter((key) => obj[key] > 1);
    return letterArray.map((stringNum) => parseInt(stringNum));
  }

  obj[arr[index]] = (obj[arr[index]] || 0) + 1;
  return solution(arr, index + 1, obj);
};


module.exports = {
  solution,
};
