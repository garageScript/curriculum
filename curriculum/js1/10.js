/**
 * 2 Timeouts: takes in 2 numbers (a,b) and a function,
 *     executes the function after a milliseconds,
 *     and then executes the function again after b milliseconds
 * @param {number} a
 * @param {number} b
 * @param {function} c
 */

let solution = (a, b, c) => {
  setTimeout(() => {
    c();
    setTimeout(c, b);
  }, a);
};

