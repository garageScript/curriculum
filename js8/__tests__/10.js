const solution = require('../10').solution;

describe('min coin', () => {
  it('should return value for one coin', () => {
    const result = solution([], 40);
    expect(result).toBe(40);
  });
  it('should work for 8 value using 1, 4, 5 coins', () => {
    const result = solution([4, 5], 8);
    expect(result).toBe(2);
  });
  it('should work for 102 value using 1, 100, 2 coins', () => {
    const result = solution([100, 2], 102);
    expect(result).toBe(2);
  });
});
