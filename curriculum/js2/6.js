/**
 * Given an array, return an array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a, idx = 0, largerThanFive = []) => {
  if (idx === a.length) {
    return largerThanFive;
  }

  if (a[idx] > 5) {
    largerThanFive.push(a[idx]);
  }

  return solution(a, idx + 1, largerThanFive);
};

module.exports = {
  solution,
};
