const expect = require('chai').expect;
const solution = require('../5').solution;

describe('call function x times', () => {
  it('should call function 2 times', () => {
    let counter = 0;
    solution(2, ()=>{counter += 1});
    expect(counter).to.equal(2);
  });
  it('should call function 3 times', () => {
    let counter = 0;
    solution(3, ()=>{counter += 1});
    expect(counter).to.equal(3);
  });
  it('should call function 4 times', () => {
    let counter = 0;
    solution(4, ()=>{counter += 1});
    expect(counter).to.equal(4);
  });
  it('should call function 5 times', () => {
    let counter = 0;
    solution(5, ()=>{counter += 1});
    expect(counter).to.equal(5);
  });
})
