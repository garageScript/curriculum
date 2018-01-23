const expect = require('chai').expect;
const solution = require('../5_1').solution;

describe('call funct x number of times using parameter y', () => {
  it('should call function 3 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},3);
    expect(counter).to.equal(3);
  });
  it('should call function 5 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},5);
    expect(counter).to.equal(5);
  });
  it('should call function 20 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},20);
    expect(counter).to.equal(20);
  });
  it('should call function 30 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},30);
    expect(counter).to.equal(30);
  });
});
