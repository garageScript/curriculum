/** Write a probram that determines if a number is a happy number.
 * @param {string}
 * @returns {string}
 *

INPUT: Your program should read lines from standard input. Each line will contain a positive enteger

OUTPUT: For each line of input, print to standard output the square of the number. Print out each result on a new line.

Examples:

  Input: '7'
  Output: '1'
  7 -> 49 -> 97  -> 130 -> 10 -> 1   //'7' is a happy number

  Input: '22'
  Output: '0'
  22 -> 8 -> 64 -> 52 -> 29 -> 85 -> 89 ...  // '22 is not a happy number

*/

/**
 * To run the given default code:
 *
 * 1. create and save a file with numbers on each line. lets call it inputTest.
 * 2. use inputTest to test your solution by running: `node 8.js < inputTest` in terminal
 */

process.stdin.resume()
process.stdin.setEncoding('utf8')

let stdin = ''
process.stdin.on('data', function (chunk) {
  stdin += chunk
}).on('end', function () {
  const lines = stdin.trim().split('\n')
  process.stdout.write(lines)
})

const solution = (str) => {
  return 0
}

module.exports = {
  solution
}
