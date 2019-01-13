
// Given an array, redistribute values greater than 1 to 
// previous elements that are 0 and change it to 1. All remainders will accumulate at index 0.

// Examples:

const solution = (a, accumlator = 0, i = a.length - 1) => {
    // console.log(a);
    if (i === 0) return a;
    if (a[i] <= 0) {
        a[i] = 1
    } else if (a[i] > 1) {
        a[0] = a[i];
    }
    return solution(a, accumlator, i - 1);
};

console.log(solution([0, 0, 3])); // returns [1,1,1]
console.log(solution([0, 1, 3])); // returns [2,1,1]
console.log(solution([0, 1, 3, 5])); // returns [6,1,1,1]
console.log(solution([1, 5])); // returns [5,1]
console.log(solution([5, 2])); // returns [6,1]
console.log(solution([5, 1])); // returns [5,1]