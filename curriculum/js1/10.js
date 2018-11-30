/**
 * 2 Timeouts: takes in 2 numbers (a,b) and a function,
 *     executes the function after a milliseconds,
 *     and then executes the function again after b milliseconds
 * @param {number} a
 * @param {number} b
 * @param {function} c
 */


let solution = (a, b, c) => {
setTimeout(() => {
  c;
  solution = setTimeout(c, b);
  }, a);
}




// const solution = (a, b, c) => {
//   setTimeout(() => { 
//     c(); 
// }, a);
//   timeout(b, c);
// };

// const timeout = (b, c) => {
//   setTimeout(() => { 
//     c(); 
// }, b);
// };

function myFunction(a, b, c) {
  setTimeout(function () {
    c();
  }, a);
  timeout(b, c);
}

function timeout(b, c) {
  setTimeout(function () {
    c();
  }, b);
}




