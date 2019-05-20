/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a letter,
 *   returns true if the letter exist in the string,
 *   false otherwise
 * @param {string} inp
 * @param {string} letter
 * @returns {boolean}
 */

// For Loop
/*const solution = (str, letter) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      return true;
    }
  }  
  return false;
}*/

// While Loop
/*const solution = (str, letter, i = 0) => {
  while (i < str.length) {
    if (str[i] === letter) {
      return true
    }
  i++;
  }
  return false
}*/

const solution = (str, letter, i = 0) => {
  if (i === str.length) return false
  if (str[i] === letter) return true
  return solution(str, letter, i + 1)
}

module.exports = {
  solution
}
