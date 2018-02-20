/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function(cb, accumulator = 0, idx = 0) {
    if (idx === this.length) return accumulator;
    accumulator = cb(accumulator, this[idx]);
    return this.gsReduce(cb, accumulator, idx + 1);
  };
};

module.exports = {
  solution,
};
