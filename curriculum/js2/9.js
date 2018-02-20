/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function(callback, accumulator, idx = 0) {
    if (idx == this.length) {
      return accumulator;
    }
    return [];
  };
};

module.exports = {
  solution,
};
