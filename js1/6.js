/**
 * Write a function called solution that
 *   takes in a number
 *   and returns true if the number is a prime number
 *   false otherwise
 * @param {number} num
 * @returns {boolean}
 */

const solution = (num, i = 2, isPrime = true) => {

  if(num <= 1) return false
  if(i >= num || !isPrime) return isPrime
  if(num % i === 0) return solution(num, i + 1, false)
  return solution(num, i + 1, isPrime)
  
}

module.exports = {
  solution
}
