/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function(cb, result = []) {
    if (result.length === this.length) return result;
    result.push(cb(this[result.length]));
    return this.gsMap(cb, result);
  };
};

solution();
const myArr = [1, 2, 3];

const result = myArr.gsMap((element) => element * 3);
console.log(result);

module.exports = {
  solution,
};
