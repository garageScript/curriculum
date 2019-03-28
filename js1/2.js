 /**  
 * Write a function that takes in a number (X)
and a function (A),
and returns a function (B). Whenever the function
(B) is called (up to X times), 
the result of function (A) is returned .
After that, null will be returned whenever the
function (B) is called.               
 * @param {number} a
 * @param {function} b
 * @returns {function}
**/

const solution = (num, func, i = 0) => {
  if (num < 1) return null
  if (num === 0) return null
    return () => {
   func()
  }
  return solution(num, func, i + 1)
}

/*



const sayHelloTimes = (name, n, i = 0) => {
   if (i === n) return
  const greet = () => {
   console.log(`Hi, ${name}`)
  }
   if (i < n) greet()
  return sayHelloTimes(name, n, i + 1)
}

console.log(sayHelloTimes('Chen', 5))

 const solution = (arr, sum = 1) => {
   const summer = (i = 0) => {
     if (i === arr.length) return sum
     if (i < arr.length) { sum *= arr[i] }
    return summer(i + 1)
   } 
  summer()
  return sum
} 
const array = [1, 2, 3, 4] 
console.log(solution(array))
*/

 module.exports = {
   solution
}
