/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, idx = 0, count = 0) => {
  if (idx === a.length) {
    return count;
  }

  if (a[idx] === b) {
    count += 1;
  }

  return solution(a, b, idx + 1, count);
};

module.exports = {
  solution,
};
