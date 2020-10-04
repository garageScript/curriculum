const solution = require('../3').solution;

describe('array product', () => {
  it('should handle base case of []', () => {
    const result = solution([]);
    expect(result).toEqual([]);
  });
  it('should handle multiple zeros', () => {
    const result = solution([6, 7, 8, 0, 7, 0]);
    expect(result).toEqual([0, 0, 0, 0, 0, 0]);
  });
  it('should handle one zero', () => {
    const result = solution([6, 7, 8, 7, 0]);
    expect(result).toEqual([0, 0, 0, 0, 2352]);
  });
  it('should handle no zeroes', () => {
    const result = solution([2, 3, 5, 6]);
    expect(result).toEqual([90, 60, 36, 30]);
  });
});
