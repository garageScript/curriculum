const expect = require('chai').expect;
const solution = require('../3').solution;

describe('array product', () => {
  it('should handle base case of []', () => {
    const result = solution([]);
    expect(result).to.deep.equal([]);
  });
  it('should handle multiple zeros', () => {
    const result = solution([6, 7, 8, 0, 7, 0]);
    expect(result).to.deep.equal([0, 0, 0, 0, 0, 0]);
  });
  it('should handle one zero', () => {
    const result = solution([6, 7, 8, 7, 0]);
    expect(result).to.deep.equal([0, 0, 0, 0, 2352]);
  });
  it('should handle no zeroes', () => {
    const result = solution([2, 3, 5, 6]);
    expect(result).to.deep.equal([90, 60, 36, 30]);
  });
});
