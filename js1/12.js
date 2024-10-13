/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 * Solution should execute the input function (which returns a number)
 *   after input number of milliseconds, then execute the input function
 *   again after waiting the returned number of milliseconds.
 * @param {number} num
 * @param {function} fun
 * @returns null
 */

const solution = (num, fun) => {
  setTimeout(() => setTimeout(fun, fun()), num)
}

module.exports = {
  solution
}
