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

/*
const solution = (obj, max, i = 0) => {
  if (i === Object.keys(obj).length) return max;
  if (i === 0) max = obj[Object.keys(obj)[i]];

  if (max < Object.values(obj)[i]) {
    max = Object.values(obj)[i]
  }
  return solution(obj, max, i + 1)
}
*/

// ONE LINE
const solution = (obj) => {
  return Math.max(...Object.values(obj));
}

module.exports = {
  solution,
};
