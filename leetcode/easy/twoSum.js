/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15]));
// [0, 1]


// UTILIZING A HASH TABLE
/*
const twoSum = (nums, target) => {
const map = {};
const len = nums.length;
map[target - nums[0]] = 0;
for (let i = 1; i < len; i++) {
    const n = nums[i];
    if (n in map) return [map[n], i];
     map[target-n] = i;
 }
}
*/
