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
 * @param {array} arr
 * @param {function} cb
 * @returns {function}
 */

 const solution = (arr, cb) => {
  index = 0
 return () => {
   if(index === arr.length) index = 0
   return cb(arr[index++])
 }
}

module.exports = {
  solution
}
