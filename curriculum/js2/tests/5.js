const expect = require('chai').expect;
const solution = require('../5').solution;

describe('given an array, return the largest element', () => {
  it('should return 7 when input is [6,7]', () => {
    const result = solution([6,7]);
    expect(result).to.equal(7);
  });
  it('should return 3 when input is [3,-13]', () => {
    const result = solution([3,-13]);
    expect(result).to.equal(3);
  });
  it('should return 8 when input is [3,8,-5]', () => {
    const result = solution([-3,-8,-5]);
    expect(result).to.equal(-3);
  });
});


