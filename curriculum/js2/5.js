/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (a, idx = 1, largest = a[0]) => {
  if (idx >= a.length) {
    return largest || -1;
  }

  if (a[idx] > largest) {
    largest = a[idx];
  }

  return solution(a, idx + 1, largest);
};

module.exports = {
  solution,
};
