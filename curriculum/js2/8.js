/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function(callback) {
    return (function gsMap(arr, callback, idx, result) {
      if (idx == arr.length) {
        return result;
      }

      result.push(callback(arr[idx]));

      return gsMap(arr, callback, idx + 1, result);
    })(this, callback, 0, []);
  };
};

module.exports = {
  solution,
};
