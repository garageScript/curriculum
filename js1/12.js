/**
Write a function called solution that takes in 2 parameters,
a number and a function.

1) solution should execute the input function 
(which returns a number)
after first input parameter milliseconds.

2) The input function should be run again after waiting the
returned number of seconds

solution(1800, () => {
  // This function will be run 1800ms after solution is called,
  //   and after that, it will be run after another 3600ms
  console.log('hello')
  return 3600
})

 * @param {number} a
 * @param {function} fun
 * @returns null
**/

const solution = (a, fun) => {

setTimeout(function() {
  fun()
}, setTimeout(fun, a))

  return null;
}

module.exports = {
  solution
}
