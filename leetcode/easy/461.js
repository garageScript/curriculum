// https://leetcode.com/problems/hamming-distance/

/* The Hamming distance between two integers is the
number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different
*/

function hammingDistance(str1, str2) {
  let counter = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      counter++;
    }
  }
  return counter;
}

console.log(hammingDistance(1, 4), 2)
