/*Write a function that takes in a number and returns a function that will output the next number every time it is called

Example:

const a = solution(5); // a is a function
// a() returns 5
// a() returns 6
// a() returns 7
*/

// bad practice
// return a += 1

const solution = (a) => {
  return () => {
    a += 1 
    return a;
  }
}

module.exports = {
  solution,
};
