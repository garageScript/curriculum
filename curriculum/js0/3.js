/**
 * Takes in a number, returns true if a number is greater than 5
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a) => {

  if (a > 60) {
    return true;
  } else {
    return false;
  }

};

module.exports = {
  solution,
};


console.log(solution(10)); // false
console.log(solution(20)); // false
console.log(solution(30)); // false
console.log(solution(40)); // false
console.log(solution(50)); // false