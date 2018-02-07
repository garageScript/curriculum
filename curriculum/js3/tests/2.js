const expect = require('chai').expect;
const solution = require('../2').solution;

describe('takes in an array of numbers, find the most common', () => {
  it('should return number 4', () => {
    const result = solution([1,2,2,3,4,4,4]);
    expect(result).to.equal(4);
  });
  it('should return number -1', () => {
    const result = solution([-1,-1,-1,2,2,5,5]);
    expect(result).to.equal(-1);
  });
  it('should return number 0', () => {
    const result = solution([0,0,1,2,4,0]);
    expect(result).to.equal(0);
  });
  it('should return number 10', () => {
    const result = solution([0,10,10,10,20,20,20,20,0,100,100]);
    expect(result).to.equal(20);
  });
});
