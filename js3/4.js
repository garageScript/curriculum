/*
 * 2sum: write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number.
 * (The numbers in the array is not unique, meaning there may be duplicate numbers)
 * @param {array} arr
 * @param {number} num
 * @returns {boolean}
 */

const solution = (arr, num, counter = 0) => {
  
  if(counter === arr.length) return false

  const isTrue = arr.reduce((result,e,i, arr)=>{
    if(i === counter) return result
    if(e + arr[counter] === num) result = true
    return result
  },false)

  if(isTrue) return true
  
  return solution(arr,num, counter + 1)
}

module.exports = {
  solution
}
