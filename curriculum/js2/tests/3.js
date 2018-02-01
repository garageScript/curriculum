const expect = require('chai').expect;
const solution = require('../3').solution;

describe('change all non prime elements of array to 1', () => {
  it('should handle base case of []', () => {
    const result = solution([]);
    expect(result).to.deep.equal([]);
  });
  it('should return [1,7] when input is [6,7]', () => {
    const result = solution([6,7]);
    expect(result).to.deep.equal([1,7]);
  });
  it('should return [3,13] when input is [3,13]', () => {
    const result = solution([3,13]);
    expect(result).to.deep.equal([3,13]);
  });
  it('should return [3,1,5] when input is [3,8,5]', () => {
    const result = solution([3,8,5]);
    expect(result).to.deep.equal([3,1,5]);
  });
});
