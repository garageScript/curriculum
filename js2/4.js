/* Write a function called solution that
 *   Takes in 2 parameters: an array of numbers and a function
 *   and returns a function
 *
 * When the returned function is called for the first time,
 *     the input function will be called with the first element of the array.
 * When the returned function is called for the second time,
 *     the input function will be called with the second element of the array.
 * When the returned function is called for the third time,
 *     the input function will be called with the third element of the array.
 * ... loop back to first element when it reaches the end

resf = solution([5,2,1,3], (e) => {
  return e+1
})

resf() // returns 6
resf() // returns 3
resf() // returns 2
resf() // returns 4
resf() // returns 6

resf = solution(["hello", "what", "a", "day"], (e) => {
  if (e.length > 2) return ""
  return e
})

resf() // returns "hello"
resf() // returns "what"
resf() // returns ""
resf() // returns "day"
resf() // returns "hello"
resf() // returns "what"

const solution = (a, cb) => {
  return () => {}
}

* @param {array} a
* @param {function} cb
* @returns {function} */

const solution = (a, cb, i = 0) => {
  if (i === a.length) return;
  return () => {
    cb(a[i])
  } 
}

module.exports = {
  solution
}
