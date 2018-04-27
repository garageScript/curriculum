/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = (arr = [], func, newarr = [], i = 0) => {
  Array.prototype.gsMap = (element, index) => {
    if (arr.length === i) return newarr;
    newarr[i].push(func(arr[i]));
    return solution(arr, func, newarr, i + 1);
  };
};

module.exports = {
  solution,
};
