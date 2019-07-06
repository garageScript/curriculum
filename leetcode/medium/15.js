// https://leetcode.com/problems/3sum/

/* Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
**/

var threeSum = function(nums) {
  const firstArr = [] 
  const secondArr = [];
  const half = (nums.length / 2);	  
  console.log("nums = ", nums)	

  for (let i = 0; i < nums; i++) {

  console.log("half = ", half)	  
  console.log("i = ", i)	  
  console.log("nums[i] = ", nums[i])	  


/*    if (i < half) {
      firstArr.push(nums[i])
    }
    if (i > half) {
      secondArr.push(nums[i])
    }*/
  }	  
  return([firstArr, secondArr])
};

const array1 = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(array1))
console.log("Output: [" +
 "[-1, 0, 1]," +
  "[-1, -1, 2]" +
"]")
