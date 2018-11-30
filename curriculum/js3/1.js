/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

// FOR LOOP

// const solution = (obj) => {
// let count = obj.a;

//   for (i in obj) {
//     if (obj[i] > count) {
//       count = obj[i];
//     }
//   }
//   return count;
// }


// RECURSION 



console.log(solution({
          a: 1,
          b: 2,
          c: 3,
          d: 4,
          e: 5
        })); // 5

console.log(solution({
          a: 10,
          b: 5,
          c: 3,
          d: 6
        })); // 10

console.log(solution({
          a: -10,
          b: -20,
          c: -30,
          d: -40
        })); // -10

console.log(solution({
          a: 0,
          b: 0,
          c: 0
        })); // 0