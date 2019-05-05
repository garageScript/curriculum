/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 *   runs the input function input number of times
 * @param {number} a
 * @param {function} fun
 * @returns null
 */

const solution =(a, fun) => { 
 if (a === 0 ) {
    return
 }
  fun()
  return solution(a-1, fun)
}

module.exports = {
  solution
}
