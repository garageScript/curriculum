/**
 * Given an array, return array of the same length where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a, idx = 0) => {
  if (idx === a.length) {
    return a;
  }

  if (a[idx] <= 5) {
    a[idx] = 0;
  }

  return solution(a, idx + 1);
};

module.exports = {
  solution,
};
