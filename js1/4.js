/**
 * Write a function called solution that
 *   takes in a function.
 * The input function will be called with increasing
 *    numbers starting from 0 until the input function
 *    returns false
 * @param {function} fun
 * @returns null
 */

const solution = (fun, i = 0) => {

  if(fun(i) === false) return
  
  solution(fun, i + 1)

}

module.exports = {
  solution
}
