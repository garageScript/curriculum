/* Longest Increasing Non - Consecutive Sequence
Given an array of numbers,
return the longest length of the sequence that is increasing, 
but does not have to be consecutive(side by side) with each other.

solution([1, 3, 2]) // returns 2

solution([3, 1, 10, 5, 20]) // returns 3
*/

const solution = (array, i = 0, count = 0) => {
  if (array.length <= 2) return 1;
  if (i === array.length) return count;

  if (array[i] > array[i + 1]) count = 0 ;
  if (array[i] < array[i] + 1) count += 1;

  return solution(array, i + 1, count);
};

console.log(solution([1, 3, 2])) // returns 2

console.log(solution([3, 1, 10, 5, 20])) // returns 3



module.exports = {
    solution,
};
