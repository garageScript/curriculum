/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a function,
 *   and returns a function.
 *  When the returned function is called for the first time,
 *    the input function will be called with the first character of the string.
 *  When the returned function is called for the second time,
 *    the input function will be called with the second character of the string.
 *  When the returned function is called for the third time,
 *    the input function will be called with the third character of the string.
 *  ...
 *  When the returned function is called with the last character of the string,
 *    calling it again will call the input function with the first character
 *    of the string and start over.
 * @param {string} a
 * @param {function} fun
 * @returns {function}
 */

const solution = (a, fun) => {
  return () => { }
}

module.exports = {
  solution
}
