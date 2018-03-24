/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b) => {
  (function looper(count = 0) {
    if (count === a) return;
    b();
    looper(count + 1);
  })();
};

module.exports = {
  solution,
};
