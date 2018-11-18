/**
 * 2 Timeouts: takes in 2 numbers (a,b) and a function,
 *     executes the function after a milliseconds,
 *     and then executes the function again after b milliseconds
 * @param {number} a
 * @param {number} b
 * @param {function} c
 */

const solution = (a, b, c) => {
  setTimeout(() => {
    c();
  }, a;
  setTimeout(() => {
    c();
  }, b);
};

module.exports = {
  solution,
};

describe('Set 2 timeouts', function () {
  it('should set 2 timeouts of different value', function (done) {
    let counter = 0;
    let errorMessage = '';
    solution(20, 30, () => {
      counter += 1;
    });
    setTimeout(() => {
      if (counter) {
        errorMessage = 'Input function is called too early';
      }
    }, 15);
    setTimeout(() => {
      if (counter !== 1) {
        errorMessage = `Input function is called too quickly, or not at all: ${counter}`;
      }
    }, 25);
    setTimeout(() => {
      if (counter !== 1) {
        errorMessage = `Input function is called too quickly, or not at all: ${counter}`;
      }
    }, 35);
    setTimeout(() => {
      if (counter !== 2) {
        errorMessage = `Input function is called too quickly, or not at all: ${counter}`;
      }
      if (errorMessage) return done(new Error(errorMessage));
      return done();
    }, 55);
  });
});


