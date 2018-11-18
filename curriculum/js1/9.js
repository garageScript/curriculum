/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  let next;
  for (let i = a + 1; true; i++){
    if (i % 7 === 0) {
      next = i; break;
    }
  }
  return next;
};

console.log(solution(1)); // 7
console.log(solution(14)); // 21
console.log(solution(21)); // 28
console.log(solution(21)); // 28
console.log(solution(28)); // 35




