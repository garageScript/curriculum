const expect = require('chai').expect;
const solution = require('../4').solution;

describe('take in target number and array, return true if two numbers in array add up to the target, ', () => {
  it('should return base case [],0', () => {
    const result = solution([],0);
    expect(result).to.equal(false);
  });
  it('should return true for input [1,4,3,2],6', () => {
    const result = solution([1,4,3,2],6);
    expect(result).to.equal(true);
  });
  it('should return false for input [-1,-3,-4],-2', () => {
    const result = solution([-1,-3,-4],-2);
    expect(result).to.equal(false);
  });
  it('should return true for input [0,0,0]', () => {
    const result = solution([0,0,0],0);
    expect(result).to.equal(true);
  });
});

