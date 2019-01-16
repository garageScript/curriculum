const expect = require('chai').expect;
let solution = require('../2').solution;

describe('change all odd elements of array to 0', () => {
  it('should handle base case of []', () => {
    const result = solution([]);
    expect(result).to.deep.equal([]);
  });
  it('should return [6,0] when input is [6,7]', () => {
    const result = solution([6,7]);
    expect(result).to.deep.equal([6,0]);
  });
  it('should return [0,0] when input is [3,13]', () => {
    const result = solution([3,13]);
    expect(result).to.deep.equal([0,0]);
  });
  it('should return [0,8,0] when input is [3,8,-5]', () => {
    const result = solution([3,8,-5]);
    expect(result).to.deep.equal([0,8,0]);
  });
});
