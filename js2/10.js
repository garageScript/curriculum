/**
 * Replicate Array.prototype.filter and call it cFilter
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_filter.asp
 */

const solution = () => {
  Array.prototype.cFilter = function(fn, i = 0, newArr = []) {
    if (i == this.length) return newArr;
    if (fn(this[i], i, this)) {newArr.push(this[i])}
    return this.cFilter(fn, i + 1, newArr)
  }
}

module.exports = {
  solution
}
