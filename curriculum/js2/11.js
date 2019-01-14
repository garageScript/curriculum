// Given an array, redistribute values greater than 1 to 
// previous elements that are 0 and change it to 1. All remainders will accumulate at index 0.

// Examples:

const solution = (array, accumulator = 0, index = array.length - 1) => {
    if (array.length < 1) return [];

    if (index === 0) {
        array[0] += accumulator;
        return array;
    }

    if (array[index] != 1) {
        accumulator += array[index];
        array[index] = 1;
        accumulator -= 1
    }

    return solution(array, accumulator, index - 1);
}

console.log(solution([])); // []ia
console.log(solution([0, 0, 3])); // returns [1,1,1]
console.log(solution([0, 1, 3])); // returns [2,1,1]
console.log(solution([0, 1, 3, 5])); // returns [6,1,1,1]
console.log(solution([1, 5])); // returns [5,1]
console.log(solution([5, 2])); // returns [6,1]
console.log(solution([5, 1])); // returns [5,1]


// solution([0, 1, 3, 5])

// Thought process(starting from the back):
//     i = 3, acc = 0
// Is arr[i] greater than or equal to 1 ?
//     3 is greater than 1, so set the arr[i] to 1, and add the remainder(4) to acc.

// i = 2, acc = 4
// Is arr[i] greater than or equal to 1 ?
//     3 is greater than 1, so set the arr[i] to 1, and add the remainder(2) to acc.

// i = 1, acc = 6
// Is arr[i] greater than or equal to 1 ?
//     1 is equal than 1, so set the arr[i] to 1, and add the remainder(0) to acc.

// i = 0, acc = 6
// Is arr[i] greater than or equal to 1 ?
//     No.Take one from the acc and set arr[i] to 1.

// i = -1, acc = 5
// Add acc to arr[0] and then
// return the array!