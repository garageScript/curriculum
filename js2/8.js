/**
 * Replicate Array.prototype.map function and call it cMap
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_map.asp
 */

const solution = () => {
  Array.prototype.cMap = function (cb, i = 0, c = []) {
    if (i == this.length) {
      return c
    }
    c.push(cb(this[i], i, this))
    return this.cMap(cb, i + 1, c)
  }
}

module.exports = {
  solution
}
