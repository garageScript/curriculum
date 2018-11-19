/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */


// FOR LOOP

// const solution = (a, b) => {
//   return 0;
//   for (let i = 0; i < a; i++) {
//     b();
//   };
// };



// RECURSION 

const solution = (a, b) => {
  if (a === 0) {
    return '';
  }
  return b() + solution(a - 1, b);
};

module.exports = {
  solution,
};

console.log(solution(2)); 
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));

describe('call function x times', () => {
  it('should call function 2 times', () => {
    let counter = 0;
    solution(2, () => {
      counter += 1
    });
    expect(counter).to.equal(2);
  });
  it('should call function 3 times', () => {
    let counter = 0;
    solution(3, () => {
      counter += 1
    });
    expect(counter).to.equal(3);
  });
  it('should call function 4 times', () => {
    let counter = 0;
    solution(4, () => {
      counter += 1
    });
    expect(counter).to.equal(4);
  });
  it('should call function 5 times', () => {
    let counter = 0;
    solution(5, () => {
      counter += 1
    });
    expect(counter).to.equal(5);
  });
})
