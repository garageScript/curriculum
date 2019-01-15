/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

// FOR LOOP

// const solution = (a, b) => {
// if (a.length < 1) return false;

//     for (var i = 0; i < a.length; i++) {
//         for (var j = i + 1; j < a.length; j++) {
//             if ((a[i] + a[j]) === b) {
//                 console.log(a[i], a[j]);
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// RECURSION

const solution = (a, b, i = 0, j = i + 1) => {
if (i === a.length || a.length < 1) return false;
    
    if ((a[i] + a[j]) === b)  return true; 

    return solution(a, b, i + 1, j)
}

console.log(solution([], 0)) // false
console.log("----");
console.log(solution([1, 4, 3, 2], 6)) // true
console.log("----");
console.log(solution([-1,-3,-4], -2)); // false
console.log("----");
console.log(solution([0,0,0], 0)); // true
