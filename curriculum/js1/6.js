/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

 // FOR LOOP

// const solution = (a) => {
//   let sum = 0;
//   for (let i = 2; i < a; i++) {
//     if (a % i === 0) {
//       sum += i;
//       console.log(sum);
//     }
//   }
//   return sum;
// };

// RECURSION

// const solution = (a, b = 0) => {
//   if (a === 2) {
//     return b;
//   }
//   if (b % a === 0) {
//     b += a;
//     console.log(b);
//   }
//   return solution(a - 1, b);
// };

// WHILE LOOP

// const solution = (a) => {
// }


console.log(solution(6)); // 5
console.log("-----");
console.log(solution(9)); // 3
console.log("-----");
console.log(solution(15)); // 8
console.log("-----");
console.log(solution(20)); // 21