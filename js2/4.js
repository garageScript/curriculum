/**
 * Write a function called solution that
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
 * @param {array} a
 * @param {function} cb
 * @returns {function}
 */

const solution = (a, cb, i = 0) => {
  return () => {
    i += 1
    console.log(i)
    if (i === a.length + 1) i = 1
    // i = (i - 1) % a.length
    return cb(a[i - 1])
  }
}

module.exports = {
  solution
}
