const expect = require('chai').expect;
let solution = require('../10').solution;

describe('Set 2 timeouts', function() {
  it('should set 2 timeouts of different value', function(done) {
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
