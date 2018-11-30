/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

// FOR LOOP 

// const solution = (a) => {
//   if (a === 1) {
//     return false;
//   }
//   for (let i = 2; i < a; i++) {
//     if (a % i === 0) {
//       return false;
//     }
//   }
//     return true;
// };


// WHILE LOOP

// const solution = (a) => {
//   i = 2;

// if (a < 2) {
//   return false;
// }
//   while (i < a){
//     if (a % i === 0) {
//       return false;
//     }
//     i++;
//   }
//   return true;
// }



// RECURSION 

const solution = (a, c = 2) => {
  if (a === c) return true ;
  if (a < 2) return false ;
  if (a % c === 0) return false ;
  return solution(a, c+1);
};


console.log("----");
console.log(solution(2)); // true
console.log("----");
console.log(solution(3)); // true
console.log("----");
console.log(solution(1)); // false
console.log("----");
console.log(solution(7)); // true
console.log("----");
console.log(solution(9)); // false
console.log("----");
console.log(solution(12)); // false
console.log("----");
console.log(solution(1223)); // true
console.log("----");
console.log(solution(1226)); // false

