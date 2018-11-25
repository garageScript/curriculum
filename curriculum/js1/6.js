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


// WHILE LOOP

// const solution = (a) => {
//   let i = 2;
//   let sum = 0;

//   while (i < a) {
//     if (a % i === 0) {
//       sum += i;
//       console.log(sum);
//     }
//     i++;
//   }
//   return sum;
// }

// RECURSION

const solution = (a, c = 2, b = 0) => {
  if (a === c) {
    return b;
  }
  if (a % c === 0) {
    b += c;
  }
  c++;
  return solution(a, c, b);
};


console.log(solution(6)); // 5
console.log("-----");
console.log(solution(9)); // 3
console.log("-----");
console.log(solution(15)); // 8
console.log("-----");
console.log(solution(20)); // 21