/**
Write a function called solution that
takes in 2 parameters, a number n and string,
and returns the string repeated n number of times

 * @param {number} a
 * @param {string} b
 * @returns {string}
 */


// FOR LOOP

const solution = (a, b, result = '') => {
   if (a < 1) { return ''; }
   for (var i = 0; i < a; i++) {
     result += b;
   }
   return result;
};


// WHILE LOOP
/*
const solution = (a, b = '') => {
   i = 0;
     while (i < a) {
       b += 'hello';
       i++;
     }
   return b;
} */


// RECURSION 
/*
const solution = (a, b, result = '') => {
  if (a === 0) return result;

  return solution(a - 1, b, result += b)
}*/

console.log("hello".repeat(6));

console.log(solution(6));

module.exports = {
  solution,
};
