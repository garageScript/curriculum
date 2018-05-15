const expect = require('chai').expect;
const solution = require('../7').solution;

describe('given an array and number, return number of elements in array that match the number', () => {
  it('should return 3 when input is [3,3,3,4,5,6],3', () => {
    const result = solution([3,3,3,4,5,6],3);
    expect(result).to.equal(3);
  });
  it('should return 1 when input is [-1,3,5,1,0,9],9', () => {
    const result = solution([-1,3,5,1,0,9],9);
    expect(result).to.equal(1);
  });
  it('should return 3 when input is [0,0,0,5,3],0', () => {
    const result = solution([0,0,0,5,3],0);
    expect(result).to.equal(3);
  });
  it('should return 2 when input is [-3,-1,-1,-8,-5],-1', () => {
    const result = solution([-3,-1,-1,-8,-5],-1);
    expect(result).to.equal(2);
  });
});

