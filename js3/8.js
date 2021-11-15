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
  objArr.forEach((e, i)=>{
    setTimeout(()=>{
      e[1](e[0])
    },num * i)
  })

}

module.exports = {
  solution
}
