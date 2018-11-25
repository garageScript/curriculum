/**
 * Given an array, return the same array where
 *   all elements <= 5 are changed to 0
 * @param {array} a
 * @returns {array}
 */

// FOR LOOP

// const solution = (a) => {
//   let arr = [];

//   for (var i = 0; i < a.length; i++) {
//     if (a[i] <= 5){
//       arr.push(0)
//     } else {
//       arr.push(a[i]);
//     }
//   }
//   return arr;
// };



// WHILE LOOP

// const solution = (a) => {
//   let arr = [];
//   i = 0;

//   while (i < a.length) {
//     if (a[i] <= 5) {
//       arr.push(0);
//     } else {
//       arr.push(a[i]);
//     }
//     i++;
//   }
//   return arr;
// }



// RECURSION 

const solution = (a, b = 0, c = []) => {
  if (b === a.length) {
    return c;
  }
  if (a[b] <= 5) {
    c.push(0)
  } else {
    c.push(a[b])
  }
  b++;
  return solution(a, b, c);
}


console.log(solution([])); // []
console.log(solution([6, 7])); // [6, 7] 
console.log(solution([3, 4])); // [0, 0]
console.log(solution([3, 8, -5])); // [0, 8, 0]