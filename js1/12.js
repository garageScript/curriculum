/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 * Solution should execute the input function (which returns a number)
 *   after input number of milliseconds, then execute the input function
 *   again after waiting the returned number of milliseconds.
 * @param {number} a
 * @param {function} fun
 * @returns null
 */

 const solution = (a, fun) => {
  setTimeout( () => { 
    const b = fun()
    setTimeout( () => {fun()
   },b)
  }, a)
}

module.exports = {
  solution
}
