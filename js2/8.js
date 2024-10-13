/**
 * Replicate Array.prototype.map function and call it cMap
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_map.asp
 */

const solution = () => {
  Array.prototype.cMap = function (cb, i = 0) {
    if (i >= this.length) return this

    cb(this[i], i, this);
    return this.map(cb, i + 1)
  }
}

module.exports = {
  solution
}
