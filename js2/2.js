/**
 * Write a function called solution that
 *   Takes in a function and returns an array.
 *
 * As long as the input function returns false,
 *   array keeps growing with the correspending index value
 * @param {function} fun
 * @returns {array}

const solution = (fun) => {
  return []
} */


// FOR LOOP
/*const solution = (fun) => {
  let newArr = [];

  for (let i = 0; true; i++) {
    if (fun(i) === true) return newArr;
    if (fun(i) === false) {newArr.push(i)}
  }
}*/

// WHILE LOOP
/*const solution = (fun) => {
  let newArr = [];
  let i = 0;
  
  while(true) {
    if (fun(i) === true) return newArr;
    if (fun(i) === false) {newArr.push(i)}
  i++
  }
}*/

// RECURSION
const solution = (fun, i = 0, newArr = []) => {
  if (fun(i) === true) return newArr;
  if (fun(i) === false) {newArr.push(i)}
  return solution(fun, i + 1, newArr)
}

module.exports = {
  solution
}
