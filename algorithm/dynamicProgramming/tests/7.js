const expect = require('chai').expect;
const solution = require('../7').solution;

describe('Target sum of subarray', () => {
  it('should calculate a subarray', () => {
    const result = solution([1, 3, 4, 6, 8], 10);
    expect(result).to.equal(true);
  });
  it('should return false when there are no valid subarrays', () => {
    const result = solution([1, 2, 3], 149);
    expect(result).to.equal(false);
  });
  it('should return false when there are no valid subarrays', () => {
    const result = solution([5, 9, 10], 3);
    expect(result).to.equal(false);
  });
  it('should work regardless of zeroes', () => {
    const result = solution([1, 0, 1], 2);
    expect(result).to.equal(true);
  });
  it('should not consider an empty sequence as a valid subarray', () => {
    const result = solution([1], 0);
    expect(result).to.equal(false);
  });
});


