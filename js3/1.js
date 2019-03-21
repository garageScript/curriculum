/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

// FOR LOOP

// const solution = (obj, max = -100) => 
//   for (let k in obj) {
//     if (obj[k] > max) {
//       max = obj[k];
//     }
//   }
//   return max;
// }

// RECURSION 

const solution = (obj, i = 0, largest = -Infinity) => {
  if (i === Object.values(obj).length) return largest
  if (largest < Object.values(obj)[i]) { largest = Object.values(obj)[i] }
  return solution(obj, i + 1, largest)
}


/*
// ONE LINE
const solution = (obj) => {
  return Math.max(...Object.values(obj));
}
*/
module.exports = {
  solution,
};
