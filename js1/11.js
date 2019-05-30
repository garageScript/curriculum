/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 *   and returns a function.
 *  When the returned function is called,
 *    the input function will run after input number of milliseconds
 * @param {number} a
 * @param {function} fun
 * @returns {function}
 */

const solution = (a, fun) => {
  return () => { 
    setTimeout(fun, a)
  }
}

module.exports = {
  solution
}
