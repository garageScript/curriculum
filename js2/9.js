/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */


const solution = () => {
  Array.prototype.gsReduce = function (fn, accumulator = 0, i = 0) {
    if (i === this.length) return accumulator;
    accumulator = fn(accumulator, this[i], i, this)
    return this.gsReduce(fn, accumulator, i + 1);
  }
};

module.exports = {
  solution,
};
