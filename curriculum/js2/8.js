/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (f, i=0,res = []) {
    // To get the actual array, use this
    if (i === this.length) return res;
    res[i] = f(this[i]);
    return this.gsMap(f,i+1,res);
  };
};

module.exports = {
  solution,
};
