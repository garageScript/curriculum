// https://leetcode.com/problems/find-the-duplicate-number/

/* SOLVED */

/*
STRINGS Example:
1) Input: "stand"
Output: []

2) Input: "apple"
Output: ["p"]

3) Input: "banana"
Output: ["a", "n"]




ARRAYS Example 1:
1) Input: [1,3,4,2,2]
Output: 2

2) Input: [3,1,3,4,2]
Output: 3
*/

/*
// STRINGS 
function findDuplicate(str) {
// your code here
  let charCount = {},
    result = [],
    char = 0,
    i, l;

  for (i = 0, l = str.length; i < l; i++ ) {
    char = str[i];
    charCount[char] = charCount[char] ? ++charCount[char] : 1;
  }

  for (i in charCount) {
    if ( charCount[i] > 1 ) {
      result.push(i);
    }
  }

  return result;
}*/

// WORKS!!!
// Array of numbers
/* Runtime: 788 ms, faster than 5.29% of JavaScript online submissions for Find the Duplicate Number.
Memory Usage: 35 MB, less than 99.74% of JavaScript online submissions for Find the Duplicate Number.
*/
 
// ARRAYS
function findDuplicate(str) {
  let newArr = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
    if (str[i] === str[j] && newArr[i] !== str[i]) {
      newArr = str[i];
    }
    }
  }
  return newArr
}


const str1 = "stand";
const str2 = "apple";
const str3 = "banana";

console.log("--strings--")
console.log(findDuplicate(str1), [])
console.log(findDuplicate(str2), ["p"])
console.log(findDuplicate(str3), ["a", "n"])
console.log(" ")

const arr1 = [1,3,4,2,2];
const arr2 = [3,1,3,4,2];
const arr3 = [2,2,2,2,2];

console.log("--Arrays--")
console.log(findDuplicate(arr1), 2);
console.log(findDuplicate(arr2), 3);
console.log(findDuplicate(arr3), 2);
