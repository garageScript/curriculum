/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (a, b) => {
  Object.prototype.dictForEach = function (b, i = 0, arr = Object.entries(this)) {
    if (i === arr.length) return
    b(arr[i][0], arr[i][1])
    return this.dictForEach(b, i + 1)
  }
  return a.dictForEach(b)
}
module.exports = {
  solution
}
