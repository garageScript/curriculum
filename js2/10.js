/**
 * Replicate Array.prototype.filter and call it cFilter
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_filter.asp
 */

const solution = () => {
  Array.prototype.cFilter = function (cb, i = 0, filtered = []) {
    if (i >= this.length) return filtered

    if (cb(this[i], i, this)){
      filtered.push(this[i])
    }
    
    return this.cFilter(cb, i + 1, filtered)
  }
}

module.exports = {
  solution
}
