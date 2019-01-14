
// Given an array, redistribute values greater than 1 to 
// previous elements that are 0 and change it to 1. All remainders will accumulate at index 0.

// Examples:

const solution = (array, index = array.length - 1, accumulator = []) => {

    let sum = array.reduce((ac, item) => ac += item)

    if ((array.length - 1) === accumulator.length) {
        accumulator.unshift(sum - (accumulator.length)) // then unshift sum
        return accumulator; // return 
    }

    accumulator.unshift(1);
    // first you distribute 1 in elements at index 1 to arr.length
    // decrement a
    // put the remainder at index 0

    return solution(array, index - 1, accumulator);
};


console.log(solution([0, 0, 3])); // returns [1,1,1]
console.log(solution([0, 1, 3])); // returns [2,1,1]
console.log(solution([0, 1, 3, 5])); // returns [6,1,1,1]
console.log(solution([1, 5])); // returns [5,1]
console.log(solution([5, 2])); // returns [6,1]
console.log(solution([5, 1])); // returns [5,1]