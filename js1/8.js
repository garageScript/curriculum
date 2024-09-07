/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a letter,
 *   and returns the number of times the letter shows up in the string
 * @param {string} inp
 * @param {string} letter
 * @returns {number}
 */

const solution = (inp, letter, i = 0, counter = 0 ) => {
  if (i >= inp.length) return counter

  if (inp[i] === letter){
    counter++
  }

  return solution(inp, letter, i + 1, counter)
}

module.exports = {
  solution
}
