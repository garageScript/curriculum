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

module.exports = {
    solution,
};