/**
 * takes in a number and returns a function
 * that will output the next number every time it is called
 * @param {number} a
 * @returns {function}
 */

// the lesson doc
// doesn't cover closures
//

const solution = (a) => {
  return () => {
    return "Hello"
  }
}

module.exports = {
  solution
}
