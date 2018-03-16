/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (callback) {
    const gsMap = (arr, callback, idx = 0, res = Array(arr.length)) => {
      if (arr.length == idx) return res;
      res[idx] = callback(arr[idx]);
      return gsMap(arr, callback, idx + 1, res);
    };
    return gsMap(this, callback);
  };
};

module.exports = {
  solution,
};
