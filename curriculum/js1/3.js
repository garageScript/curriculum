/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b) => {
  const recur = (x=a, counter = 0, b='') => {
    if (x === counter) {
      return b;
    };
    b += 'hello';
    recur(x, counter+1, b);
      };
  return b;
};

module.exports = {
  solution,
};
