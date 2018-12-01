/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @return {number}
 */


// FOR LOOP 

const solution = (arr) => {
  let common = 0;
  let counter = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
    if () {
      common = arr[i];
    }
  }
  return common;
};

// RECURSION 

// const solution = (arr) => {}



console.log(soltion([1, 2, 2, 3, 4, 4, 4])); // 4
console.log(soltion([-1, -1, -1, 2, 2, 5, 5])); // -1
console.log(soltion([0, 0, 1, 2, 4, 0])); // 0
console.log(soltion([0, 10, 10, 10, 20, 20, 20, 20, 0, 100, 100])); // 20
console.log(soltion([4, 1, 4, 2, 2, 3, 4])); // 4