/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (arr, i = 0, largest = arr[i]) => {
  if(arr.length === 0) return "";
  if(arr.length === i) return largest;
  if(arr[i] >= largest) largest = arr[i];
  return solution(arr, i + 1, largest);
};

module.exports = {
  solution,
};
