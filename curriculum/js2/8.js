/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */
const solution = () => {
  Array.prototype.gsMap = function(fn, newItems = [], i = 0) {
    // To get the actual array, use this
    if (i === this.length) return newItems;
    let mapped = fn(this[i]);
    newItems.push(mapped);
    return this.gsMap(fn, newItems, i + 1);
  }
};

solution();

let arr = [1, 2, 3]


console.log([1, 2, 3].gsMap(x => x)); // [1, 2, 3];
console.log(solution([])); // []
console.log([1, 2, 3].gsMap(x => x + 5)); // 6, 7, 8
console.log(arr.gsMap(x => x * x));