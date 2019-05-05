/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a letter,
 *   and returns the number of times the letter shows up in the string
 * @param {string} inp
 * @param {string} letter
 * @returns {number}
 */

const solution = (inp, letter, counter = 0, i = 0) => {
  if (!inp || i === inp.length) return counter
  if (inp[i] === letter) return solution(inp,letter,counter + 1, i + 1)
  return solution(inp,letter,counter, i + 1)
}

module.exports = {
  solution
}
