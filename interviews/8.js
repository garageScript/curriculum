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
  22 -> 4 -> 16 -> 37 -> 58 -> 164 -> 53 ...  // '22 is not a happy number

*/

process.stdin.resume()
process.stdin.setEncoding('utf8')

var stdin = ''
process.stdin.on('data', function (chunk) {
  stdin += chunk
}).on('end', function () {
  var lines = stdin.trim().split('\n')

  for (var i = 0; i < lines.length; i++) {
    const res = solution(lines[i])
    process.stdout.write(String(res))
  }
})

const solution = (num, h = {}) => {
  const res = num.split('').map(n => Math.pow(parseInt(n), 2)).reduce((acc, cur) => acc + cur, 0)
  if (h[res]) return '0'
  if (res === 1) return '1'
  h[res] = h[res] || true
  return solution(String(res), h)
}

module.exports = {
  solution
}
