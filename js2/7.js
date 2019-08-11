/**
 * Replicate Array.prototype.forEach and call it cForEach
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_forEach.asp
 */

const solution = () => {
  Array.prototype.cForEach = function (cb, i = 0) {
    if (i === this.length) {
      return
    }
    setTimeout(cb(this[i]), 10)
    return this.cForEach(cb, i + 1)
  }
}

module.exports = {
  solution
}
