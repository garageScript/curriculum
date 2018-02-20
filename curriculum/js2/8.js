/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function(cb, result = []) {
    if (result.length === this.length) return result;
    result.push(cb(this[result.length]));
  };
};

module.exports = {
  solution,
};
