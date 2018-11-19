/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */


// FOR LOOP

// const solution = (a, b = '') => {
//   for (let i = 0; i < a; i++) {
//     b += b;
//   }
//   return ;
//   };

// RECRSIVE 

// const solution = (a, b) => {
//   if (a === 0) {
//     return '';
//   }
//   console.log(b);
//   return b + solution(a - 1, b);
// };

console.log(solution(2, '')); // ''
console.log(solution(3, 'joe')); // 'joejoejoe'
console.log(solution(4, 'julie')); // 'juliejuliejuilejuliejulie'
console.log(solution(5, 'olaf')); // 'olafolafolafolafolafolaf'

// describe('print string x number of times', () => {
//   it('should repeat empty string 2 times', () => {
//     const result = solution(2, '');
//     expect(result).to.equal('');
//   });
//   it('should repeat string 3 times', () => {
//     const result = solution(3, 'joe');
//     expect(result).to.equal('joejoejoe');
//   });
//   it('should repeat string 4 times', () => {
//     const result = solution(4, 'julie');
//     expect(result).to.equal('juliejuliejuliejulie');
//   });
//   it('should repeat string 5 times', () => {
//     const result = solution(5, 'olaf');
//     expect(result).to.equal('olafolafolafolafolaf');
//   });
// })
