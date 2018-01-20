const expect = require('chai').expect;
const solution = require('../5_1').solution;

describe('call funct x number of timesall funct x number of times with parameter y and return sum', () => {
  it('should be sum of 3', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},3);
    expect(counter).to.equal(result);
  });
  it('should be sum of 5', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},5);
    expect(counter).to.equal(result);
  });
  it('should be sum of 20', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},20);
    expect(counter).to.equal(result);
  });
  it('should be sum of 30', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},30);
    expect(counter).to.equal(result);
  });
});
