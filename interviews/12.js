/*
 * Validating Email Addresses with Regex
 *
 * We consider an email address in the form user@domain.extension to be valid if its domain and extension are c0d3.com
 * and the value of the user satisifies the following constraints:
 *
 *  - It starts with between 1 and 6 lowercase English letters denoted by the character class [a-z]
 *  - The lowercase letter(s) are followed by an optional underscore, i.e. zero or one occurrence of the _ character
 *  - The optional underscore is followed by 0 to 4 optional digits denoted by the character class [0-9]
 *
 * Write a function using Regex that returns an array of Booleans. True for each valid match and False for each incorrect match.
 *
 * const example = [ 'julia@c0d3.com', 'julia_@c0d3.com', 'julia_0@c0d3.com', 'julia0_@c0d3.com', 'julia@gmail.com' ]
 * const result = solution(example)
 * console.log(result) -> [true, true, true, false, false]
 *
 * @params{Array}
 * @returns{Array}
 */

const solution = (arr) => {
  return 0
}

module.exports = {
  solution
}
