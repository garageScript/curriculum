/**
 * 2 Timeouts: takes in 2 numbers (a,b) and a function,
 *     execute the function after a seconds,
 *     and then execute the function again after b seconds
 * @param {number} a
 * @param {number} b
 * @param {function} c
 */

const solution = (num1, num2, func) => {
  setTimeout(() => {
    setTimeout(() => { func(); }, num1);
    func();
  }, num2);
};

module.exports = {
  solution,
};

