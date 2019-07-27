/**
 * Write a function called solution that
 *   Takes in an array of functions and a number,
 *   and calls every function input milliseconds later
 * @param {array} a
 * @param {number} t

const func = () => {
  console.log('hello')
}
solution([func,func,func], 300) 
// console.log('hello') will be run 3 times, after 300ms
*/

const solution = (a, t, i = 0) => {
  if (i === a.length) return;
  setTimeout(a[i], t)
  return solution(a, t, i + 1)
}

module.exports = {
  solution
}
