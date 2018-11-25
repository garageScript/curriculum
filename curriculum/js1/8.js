/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */


// "It will seem difficult at first,
// but everything is difficult at first."

// - Miyamoto Mushashi

// FOR LOOP

// const solution = (a, b) => {
//   let denom;
//   for (let i = 0; i <= b; i++) {
//     if (a % i === 0 && b % i === 0) {
//       denom = i;
//     }
//   }
//   return denom;
// };



// WHILE LOOP

// const solution = (a, b) => {
//   let i = 0;
//   let denom;
//   let greatest;
//   if (a > b) {
//     greatest = a;
//   } else {
//     greatest = b;
//   }
//   while (i <= greatest) {
//     if (a % i === 0 && b % i === 0) {
//       denom = i;
//     }
//     i++;
//   }
//   return denom;
// }


// RECURSION

const solution = (a, b, c = b) => {
  if (a % c === 0 && b % c === 0) {
      return c;
  }
  c--;
  return solution(a, b, c);
}

console.log(solution(30, 45)); // 15
console.log("----");
console.log(solution(30, 43)); // 1
console.log("----");
console.log(solution(10, 10)); // 10
console.log("----");
console.log(solution(15, 5)); // 5