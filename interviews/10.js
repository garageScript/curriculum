/*
 * Given an integer n, return an array of the first n numbers in 
 * the Fibonacci sequence given starting elements of [0, 1]
 * @param {Number}
 * @returns {Array}
 *
 * solution(1) -> [0]
 * solution(2) -> [0, 1]
 * solution(4) -> [0, 1, 1, 2]
 * solution(6) -> [0, 1, 1, 2, 3, 5]
 */

// Explanation for the solution:
// https://www.youtube.com/watch?v=Mv9NEXX1VHc
// https://www.youtube.com/watch?v=7t_pTlH9HwA

// FOR LOOP
/*const solution = (n, seq = [0, 1]) => {
  if (n < 2) return [0]

  for (let i = 2; i < n; i++) {
    let first = seq[seq.length - 1];
    let second = seq[seq.length - 2];
    let sum = first + second;
    seq.push(sum)
  }
  return seq;
}*/


// WHILE LOOP
/*const solution = (n, seq = [0, 1]) => {
  if (n < 2) return [0];
  let i = 2;

  while (i < n) {
    let first = seq[seq.length - 1]
    let second = seq[seq.length - 2]
    let sum = first + second;
    seq.push(sum)
    i++
  }
  return seq;
}*/

// RECURSION
const solution = (n, seq = [0, 1], i = 2) => {
  if (n < 2) return [0]
  if (n === 2) return seq;
  if (i === n) return seq

  let first = seq[seq.length - 1]
  let second = seq[seq.length - 2]
  let sum = first + second

  seq.push(sum)
  return solution(n, seq, i + 1)
}

module.exports = {
  solution
}
