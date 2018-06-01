/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function(func, newarr = [], i = 0) {
    if (this.length === i) return newarr;
    newarr.push(func(this[i]));
    return this.gsMap(func, newarr, i + 1);
  };
};

module.exports = {
  solution,
};
