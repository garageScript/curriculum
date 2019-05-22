// https://leetcode.com/problems/pascals-triangle/

/* Given a non-negative integer numRows,
generate the first numRows of Pascal's triangle.

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
] */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(n) {
  let result = [[1], [1, 1]];
  let currentLevel = []

  if (n < 0) return []
  if (n === 0) return [[1]]
  if (n === 1) return result

  for (let i = 2; i < n; i++) {
    currentLevel = [1]

    for (let j = 1, m = i; j < m; j++) {
      currentLevel[j] = result[i - 1][j] + result[i - 1][j -1]
    }
    currentLevel.push(1)
    result.push(currentLevel)	  
  }
  return result	
};

console.log(generate(5))
console.log(generate(10))
console.log(generate(15))
