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
 * @params{Array}
 * @returns{Boolean}
 */

const solution = (arr) => {
  const re = /^[a-z]{1,6}_?\d{0,4}@c0d3\.com/
  return arr.map(s => re.test(s))
}

module.exports = {
  solution
}
