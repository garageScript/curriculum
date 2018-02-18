/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function(callback, accumulator) {
    return (function gsReduce(arr, callback, idx, accumulator = 0) {
      if (idx === arr.length) {
        return accumulator;
      }

      accumulator = callback(accumulator, arr[idx]);

      return gsReduce(arr, callback, idx + 1, accumulator);
    })(this, callback, 0, accumulator);
  };
};

module.exports = {
  solution,
};
