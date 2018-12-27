const expect = require('chai').expect;
const solution = require('../1').solution;

describe('2sum consecutive', () => {
  it('should handle base case of []', () => {
    const result = solution([], 10);
    expect(result).to.equal(false);
  });
  it('should handle case with negative numbers', () => {
    const result = solution([-1, 1, 3], 0);
    expect(result).to.equal(true);
  });
  it('should handle case with no results', () => {
    const result = solution([-1, 10, 3], 8);
    expect(result).to.equal(false);
  });
  it('should handle case with result at end', () => {
    const result = solution([-1, 10, 3], 13);
    expect(result).to.equal(true);
  });
  it('should handle flase case with non-consecutive sum', () => {
    const result = solution([-1, 10, 3], 2);
    expect(result).to.equal(false);
  });
});
