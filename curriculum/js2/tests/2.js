const expect = require('chai').expect;
let solution = require('../2').solution;

describe('return array of same length where all odd elements are changed to 0', () => {
  it('should handle base case of []', () => {
    const result = solution([]);
    expect(result).to.deep.equal([]);
  });
  it('should return [0,2] when input is [1,2]', () => {
    const result = solution([1,2]);
    expect(result).to.deep.equal([0,2]);
  });
  it('should return [0,3,0] when input is [3,3,3]', () => {
    const result = solution([3,3,3]);
    expect(result).to.deep.equal([0,3,0]);
  });
  it('should return [0] when input is [2]', () => {
    const result = solution([2]);
    expect(result).to.deep.equal([0]);
  });
});
