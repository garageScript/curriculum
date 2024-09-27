/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 *   runs the input function input number of times
 * @param {number} num
 * @param {function} fun
 * @returns null
 */

const solution = (num, fun) => {
  if ( num <= 0 ) return null

  fun()
  return solution(num - 1 , fun)
}

module.exports = {
  solution
}
