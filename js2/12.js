/**
 * Replicate Array.prototype.filter and call it gsFilter
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsFilter = function(fn, i = 0, filtered = []) {
    if (i === this.length) return filtered;
    // if (fn(this[i], i, this)) filtered.push(this[i]);
    filtered.push(fn(this[i], i, this));
    return this.gsFilter(fn, i + 1, filtered);
  };
};

module.exports = {
    solution,
};
