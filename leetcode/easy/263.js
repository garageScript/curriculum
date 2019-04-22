// https://leetcode.com/problems/ugly-number/

/*263. Ugly Number
Easy

213

404

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example 1:

Input: 6
Output: true
Explanation: 6 = 2 × 3
Example 2:

Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2
Example 3:

Input: 14
Output: false 
Explanation: 14 is not ugly since it includes another prime factor 7.
*/


/**
 * @param {number} num
 * @return {boolean}
 */
const isPrime = (n, i = 2) => {
  if (i === n) { return true }
  if (n < 2) { return true }
  if (n % i === 0) { return false }
  return isPrime(n, i + 1)
}
console.log(isPrime(7), 'true', 'isPrime') // true
console.log(isPrime(8), 'false', 'isPrime') // false
console.log(isPrime(10), 'false', 'isPrime') // false
console.log(isPrime(5), 'true', 'isPrime') // true
console.log('-------')

const isUgly = function(num, i = num) {
  if (i === 2) return false
  if (isPrime(i) && i % 2 === 0) return true
  if (isPrime(i) && i % 3 === 0) return true
  if (isPrime(i) && i % 5 === 0) return true
  return isUgly(num, i - 1)
};

console.log(isUgly(6), 'true', 'isUgly')
// true
//
console.log(isUgly(8), 'true', 'isUgly')
// true
//
console.log(isUgly(14), 'false', 'isUgly')
// false
