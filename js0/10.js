/**
 * Write a function called solution that
 * Takes in 2 functions, returns
 *   the sum of the result of calling the 2 functions
 * @param {function} func1
 * @param {function} func2
 * @returns {number}
 */

const solution = (fun1, fun2) => fun1() + fun2();

module.exports = {
  solution,
};
