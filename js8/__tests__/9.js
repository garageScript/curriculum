const solution = require('../9').solution;

describe('longest increasing sequence', () => {
  it('should return 1 for one case', () => {
    const result = solution([100]);
    expect(result).toBe(1);
  });
  it('should return 1 for no increasing sequence', () => {
    const result = solution([100, 2]);
    expect(result).toBe(1);
  });
  it('should return 2 for consecutive increasing sequence', () => {
    const result = solution([100, 0, 1]);
    expect(result).toBe(2);
  });
  it('should return 3 for non-consecutive increasing sequence', () => {
    const result = solution([100, 50, 101, 51, 52]);
    expect(result).toBe(3);
  });
  it('should return 4 for non-consecutive increasing sequence', () => {
    const result = solution([10, 11, 5, 12, 13]);
    expect(result).toBe(4);
  });
  it('3, 10, 2, 1, 20 should return 3', () => {
    const result = solution([3, 10, 2, 1, 20]);
    expect(result).toBe(3);
  });
  it('3, 2 should return 1', () => {
    const result = solution([3, 2]);
    expect(result).toBe(1);
  });
  it('50, 3, 10, 7, 40, 80 should return 4', () => {
    const result = solution([50, 3, 10, 7, 40, 80]);
    expect(result).toBe(4);
  });
  it('2, 6, 3, 4, 5 should return 4', () => {
    const result = solution([2, 6, 3, 4, 5]);
    expect(result).toBe(4);
  });
  it('1,2,3,8,9,5,6,7 should return 6', () => {
    const result = solution([1, 2, 3, 8, 9, 5, 6, 7]);
    expect(result).toBe(6);
  });
  it('1,8,5,6,7 should return 4', () => {
    const result = solution([1, 8, 5, 6, 7]);
    expect(result).toBe(4);
  });
});
