/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 *   runs the input function input number of times
 * @param {number} num
 * @param {function} fun
 * @returns null
 */

const solution = (num, fun, counter = 0) => {

  if(counter >= num) return null
  fun()
  return solution(num, fun, counter + 1)
  
}

module.exports = {
  solution
}
