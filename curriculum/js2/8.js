/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (item) {
    // To get the actual array, use this
    return 0;
  };
};

// EXAMPLE MAP

const three = [1, 2, 3];
const doubled = three.map(function (item) {
  return item * 2;
});
console.log(doubled);  // [2, 4, 6];
// 1 * 2
// 2 * 2
// 3 * 2

console.log(solution([1, 2, 3])); // [1, 2, 3];
console.log(solution([])); // []
console.log(solution([1, 2, 3])); // 6, 7, 8