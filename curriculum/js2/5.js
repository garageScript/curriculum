/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (array, c = 0, largest = array[0]) => {
  if (array.length === 0) {
    return '';
  }
  if (array.length === c) {
  return largest;
  }
  if (array[c] > largest) {
    largest = array[c];
  }
  return solution(array, c + 1, largest);
};

module.exports = {
  solution,
};
