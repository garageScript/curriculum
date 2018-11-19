/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

// FOR LOOP

// const solution = (a) => {
//   let hello = '';
//   for (var i = 0; i < a; i++) {
//     hello += 'hello';
//   }
//   return hello;
// };

// RECURSIVE IMPLEMENTATION

function solution(a, b = '') {
  if (a === 0) {
    return b;
  }
  b += 'hello';
  return solution(a - 1, b);
}

console.log(solution(0));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));





// describe('repeat string hello x times', () => {
//   it('should repeat string hello 0 times', () => {
//     const result = solution(0);
//     expect(result).to.equal('');
//   });
//   it('should repeat string hello 3 times', () => {
//     const result = solution(3);
//     expect(result).to.equal('hellohellohello');
//   });
//   it('should repeat string hello 4 times', () => {
//     const result = solution(4);
//     expect(result).to.equal('hellohellohellohello');
//   });
//   it('should repeat string hello 5 times', () => {
//     const result = solution(5);
//     expect(result).to.equal('hellohellohellohellohello');
//   });
// })
