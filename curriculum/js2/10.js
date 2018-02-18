/**
 * Replicate Array.prototype.forEach and call it gsForEach
 *   ForEach takes in a function, and that function is
 *   called for every element in the array along
 *   with the index.
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

const solution = () => {
  Array.prototype.gsForEach = function(callback) {
    return (function gsForEach(arr, idx, callback) {
      if (idx === arr.length) {
        return;
      }

      callback(arr[idx], idx, arr);

      return gsForEach(arr, idx + 1, callback);
    })(this, 0, callback);
  };
};

module.exports = {
  solution,
};
