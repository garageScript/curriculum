/**
 * Replicate Array.prototype.reduce and call it cReduce
 * Documentation:
 *     Replicate Array.prototype.reduce and call it cReduce
 */

const solution = () => {
  Array.prototype.cReduce = function(fn, acc=0, i = 0) {
    if (i === this.length) return acc;
    acc = fn(acc, this[i], i, this)
    return this.cReduce(fn, acc, i + 1)
  }
}

module.exports = {
  solution
}
