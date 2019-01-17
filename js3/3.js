/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (arr, index = 0, obj = {}) => {
  console.log(obj);
  if (index === arr.length) {
    const result = Object.keys(obj);
    return result.filter((key) => obj[key] > 1);
  }
  obj[arr[index]] = (obj[arr[index]] || 0) + 1
  return solution(arr, index + 1, obj);
}
module.exports = {
  solution,
};