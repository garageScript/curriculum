/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */


// FOR LOOP

//  */

// const solution = (a, b) => {
//   for (let i = 0; i < a; i++) {
//     b();
//   }
// };


// WHILE LOOP

// const solution = (a, b) => {
//   i = 0;

//   while (i < a) {
//     b()
//     i++;
//   }
// }

// RECURSION

const solution = (a, b) => {
  if (a === 0) {
    return;
  }
  b();
  solution(a - 1, b);
};

function hello() {
  console.log("Hello World");
};

function goodbye(){
  console.log("GoodBye!");
}

console.log(solution(2, hello()));
// console.log(solution(3, goodbye()));

hello();
goodbye();