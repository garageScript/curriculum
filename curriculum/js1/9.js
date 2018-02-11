/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (num) => {
  num += 1;
  if (!(num % 7)) return num;
  return solution(num);
};

module.exports = {
  solution,
};
