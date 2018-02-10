/**
 * 2 Timeouts: takes in 2 numbers (a,b) and a function,
 *     execute the function after a seconds,
 *     and then execute the function again after b seconds
 * @param {number} a
 * @param {number} b
 * @param {function} c
 */

const solution = (a, b, c, completed = false) => {
  setTimeout(() => {
    c();
    if (completed) {
      return null;
    } else {
      a = b;
      completed = true;
    }
    solution(a, b, c);
  }, a);
};

module.exports = {
  solution,
};
