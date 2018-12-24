/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === b) {
        return true;
      }
    }
  }
  return false;
}


// const solution = (a, b, i = 0, j = 0) => {
//   if (a[i] + a[j] === b) return true;
//   console.log(a[i]);
//   console.log(a[j]);
//   console.log("---");
//   if (i === a.length && j === a.length) return false;
//   return solution(a, b, i + 1, j + 1);
// };

module.exports = {
  solution,
};


console.log(solution([], 0)) // false
console.log(solution([1, 4, 3, 2], 6)) // true
console.log(solution([-1,-3,-4], -2)); // false
console.log(solution([0,0,0], 0)); // true
