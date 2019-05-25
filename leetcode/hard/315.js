// https://leetcode.com/problems/count-of-smaller-numbers-after-self/

/* You are given an integer array nums and you have to 
return a new counts array. The counts array has the 
property where counts[i] is the number of smaller
elements to the right of nums[i].

Example:
Input: [5,2,6,1]
Output: [2,1,1,0] 

Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var countSmaller = function(nums) {
let counter = 0;
let newArr = []
let l = nums.length;

  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {

  if (nums[j] === nums[l - 1]) {
  newArr.push(counter)
  counter = 0;
  }

console.log("nums[i] =", nums[i])
console.log("nums[j] =", nums[j])
console.log("-----------")

  if (nums[i] > nums[j]) {
  counter++;
console.log("counter =", counter)
console.log("newArr =", newArr)
console.log("-----------")
      }
    }
  }
  return newArr;
};

console.log("Input: [5,2,6,1]")
console.log(countSmaller([5,2,6,1]))
console.log("Output: [2,1,1,0]")
