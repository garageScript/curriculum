/**
 * 2 Timeouts: takes in 2 numbers (a,b) and a function,
 *     execute the function after a seconds,
 *     and then execute the function again after b seconds
 * @param {number} a
 * @param {number} b
 * @param {function} c
 */

const solution = (a, b, c) => {
  const timeout1 = global.setTimeout(c, a * 1000);
  const timeout2 = global.setTimeout(c, (a + b) * 1000);
};

module.exports = {
  solution,
};

