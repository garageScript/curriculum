// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), 
some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? 
You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
**/

// sort array
// remove duplicates
// start indexing at 1

// if index !== nums[i]
// const missing = []
// push index into missing array

// return missing array

const arr1 = [4,3,2,7,8,2,3,1]
const arr2 = [1,1]
const arr3 = []
const arr4 = [2,2]

const output1 = [5,6]
const output2 = [2]
const output3 = []
const output4 = [1]

var findDisappearedNumbers = function(nums) { 
  var actual;
  var i;
  var res = [];

  for (i = 0; i < nums.length; i++) {
    actual = Math.abs(nums[i]) - 1;
    if (nums[actual] > 0) 
      nums[actual] *= -1
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0)
      res.push(i + 1)
  }

  return res;
};

console.log(findDisappearedNumbers(arr1), output1)
console.log(findDisappearedNumbers(arr2), output2)
console.log(findDisappearedNumbers(arr3), output3)
console.log(findDisappearedNumbers(arr4), output4)

