/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b) => {
  const recur = (x, counter = 0, b = '') => {
    if (x === counter) {
      return b;
    };
    b += 'hello';
    return recur(x, counter+1, b);
      };
  return recur(a);
};

module.exports = {
  solution,
};
