/* Write a function called solution that takes in 2 parameters,
a number and a function.

1) solution should execute the input function 
(which returns a number)
after first input parameter milliseconds.

2) The input function should be run again after waiting the
returned number of seconds

solution2(1800, () => {
  // This function will be run 1800ms after solution is called,
  //   and after that, it will be run after another 3600ms
  console.log('hello')
  return 3600
})

 * @param {number} a
 * @param {function} fun
 * @returns null
**/

/*const solution2 = (1800, () => {
  // This function will be run 1800ms after solution is called,
  //   and after that, it will be run after another 3600ms
  console.log('hello')
  return 3600
})*/

const solution = (a, fun) => {
  // a grabs 1800 ms
  setTimeout(() => {
    const value = fun()
    // value grabs 3600 ms
    setTimeout(fun, value)
  }, a)
}

module.exports = {
  solution
}
