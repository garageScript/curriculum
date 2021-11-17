/*
 * Write a function that takes in an object and a number (millieseconds).
 * - You must call each function value of the object {"nVal": (k) => {...}}
 * - {"nVal": (k) => {...When this function runs, k is "nVal"...}}
 * @param {object} obj
 * @param {number} num (millieseconds)
 * @call each function value of the object, millieseconds after each other
*/

const solution = (obj, num) => {

  const objArr = Object.entries(obj)
  const callEach = (i = 0) => {
    if(i === objArr.length) return
    objArr[i][1](objArr[i][0])
    setTimeout(()=>{callEach(i+1)}, num)
  }
  callEach()

}

module.exports = {
  solution
}
