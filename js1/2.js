/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 *   and returns a function.
 * When the returned function is called,
 *   it will return whatever the input function returns
 * When the returned function is called input number of times,
 *   it will return null
 * @param {number} num
 * @param {function} fun
 * @returns {function}
 */

const solution = (num, fun) => {
  let count = 0

  return () =>  {
    if (count < num){
      count++
      return fun ()
    } 
    return null
  }
}

module.exports = {
  solution
}
