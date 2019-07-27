/**
 * Write a function called solution that
 *   that takes in an array of functions and a number,
 *     and calls each function input milliseconds after another
 * @param {array} a
 * @param {number} t

const func = () => {
  console.log('hello')
}

solution([func,func,func], 300) 
// console.log('hello') will be run after 300ms
// console.log('hello') will be run after 300ms
// console.log('hello') will be run after 300ms
*/

const solution = (a, t, i = 0) => {
  if (i === a.length) return
  setTimeout(a[i], t)
  return solution(a, t, i + 1)
}

/*const solution = (a, t) => {
}*/

module.exports = {
  solution
}
