/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

// FOR LOOP

const solution = (obj, i = 0, largest = 0) => {
  if (i === obj.length) return largest;
if (obj.i < largest) {
  largest === obj.i;
}
  console.log(obj.i);
  return solution(obj, i + 1);
}


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