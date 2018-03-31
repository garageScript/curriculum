/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (callback, arr = this, idx = 0, res = Array(this.length)) {
    if (arr.length == idx) return res;
    res[idx] = callback(arr[idx]);
    return Array.prototype.gsMap(callback, arr, idx + 1, res);
  };
};

module.exports = {
  solution,
};
