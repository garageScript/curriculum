const expect = require('chai').expect;
const solution = require('../4').solution;

describe('given an array, return the sum of all the values', () => {
  it('should handle base case of []', () => {
    const result = solution([]);
    expect(result).to.equal(0);
  });
  it('should return 13 when input is [6,7]', () => {
    const result = solution([6,7]);
    expect(result).to.equal(13);
  });
  it('should return -10 when input is [3,-13]', () => {
    const result = solution([3,-13]);
    expect(result).to.equal(-10);
  });
  it('should return 6 when input is [3,8,-5]', () => {
    const result = solution([3,8,-5]);
    expect(result).to.equal(6);
  });
});

