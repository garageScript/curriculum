/**
 * Creates Array.prototype.cFind that has the same functionality as find
 *   If nothing was found, return undefined (which should be default
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

const solution = () => {
  Array.prototype.cFind = function (cb, i = 0) {
    if (i >= this.length) return 

    if (cb(this[i], i, this)) return this[i]
    
    return this.cFind(cb, i + 1)
  }
}

module.exports = {
  solution
}
