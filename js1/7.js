/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a letter,
 *   returns true if the letter exist in the string,
 *   false otherwise
 * @param {string} inp
 * @param {string} letter
 * @returns {boolean}
 */

const solution = (inp, letter, i = 0) => { // solution('scp','p')
  if (!inp) return false  // empty string input
  if (inp[i] === letter) return true /* stack lv1: 's' !== 'p' i = 0 inp.length = 3
                                              lv2: 'c' !== 'p' i = 1 inp.length = 3
                                              lv3: 'p' === 'p' return true stop execute following line i = 2 inp.length = 3
                                              */
    */
  if (i === inp.length -1) return false
  return solution(inp,letter, i + 1)
} 

module.exports = {
  solution
}
