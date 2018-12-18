/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @return {number}
 */


// FOR LOOP 

const solution = (arr) => {
  let num = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      for (var k = 0; k < arr.length; k++) {
        if (i === k && i === j && k === j) {
          num = arr[i];
        }
      }
    }
  }
  return num;
};

// RECURSION 

// const solution = (arr) => {}



console.log(solution([1, 2, 2, 3, 4, 4, 4])); // 4
console.log(solution([-1, -1, -1, 2, 2, 5, 5])); // -1
console.log(solution([0, 0, 1, 2, 4, 0])); // 0
console.log(solution([0, 10, 10, 10, 20, 20, 20, 20, 0, 100, 100])); // 20
console.log(solution([4, 1, 4, 2, 2, 3, 4])); // 4