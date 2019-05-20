/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a letter,
 *   and returns the number of times the letter shows up in the string
 * @param {string} str
 * @param {string} letter
 * @returns {number}
 */

const solution = (str, letter, counter = 0, i = 0) => {
  if (i === str.length) return counter
  if (str[i] === letter) { counter+=1 }
  return solution(str, letter, counter, i + 1)
}

module.exports = {
  solution
}
