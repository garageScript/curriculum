/**
 * Create Object.prototype.forEach
 *   ForEach takes in a function, and that function
 *       is called with key, value parameters for
 *       every entry in the object
 */

// You can use helper functions like:
//     Object.keys, Object.values, or Object.entries
const solution = () => {
  Object.prototype.gsForEach = function (cb, i = 0, arr = Object.entries(this)) {
    if (i === arr.length) return
    cb(arr[i][0], arr[i][1])
    return this.gsForEach(cb, i + 1)
    // To get the actual object, use this
  }
}

module.exports = {
  solution
}
