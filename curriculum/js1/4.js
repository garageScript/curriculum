/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */


// FOR LOOP 

// const solution = (a, b) => {
//   let str = '';
//   for (var i = 0; i < a; i++) {
//     str += b;
//   }
//   return str;
// };


// WHILE LOOP 

// const solution = (a, b) => {
//   let str = '';

//   i = 0;
//   while (i < a) {
//     str += b;
//     i++;
//   }
//   return str;
// };

// RECURSION 

const solution = (a, b, c = '') => {
  if (a === 0) {
    return c;
  }
  return solution(a - 1, b, c+=b);
};


console.log(solution(2, '')); // 
console.log(solution(3, 'joe')); // joejoejoe
console.log(solution(4, 'julie')); // juliejuliejuliejulie
console.log(solution(5, 'olaf')); // olafolafolafolafolaf