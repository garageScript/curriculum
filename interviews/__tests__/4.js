const solution = require('../4').solution;

describe('arrange zero', () => {
  it('should handle base case of []', () => {
    const a = [];
    const result = solution(a);
    expect(a).toEqual([]);
    expect(result).toBe(0);
  });
  it('should handle case with ending zeros', () => {
    const a = [1, 2, 3, 0, 0];
    const result = solution(a);
    expect(a.slice(result)).toEqual([0, 0]);
  });
  it('should handle case with middle and ending zeros', () => {
    const a = [1, 2, 0, 3, 0, 0];
    const result = solution(a);
    expect(a.slice(result)).toEqual([0, 0, 0]);
  });
  it('should handle case with leading middle zeros', () => {
    const a = [0, 0, 3, 0, 4];
    const result = solution(a);
    expect(a.slice(result)).toEqual([0, 0, 0]);
  });
  it('should handle case with multiple middle zeros', () => {
    const a = [5, 5, 0, 2, 0, 3, 0];
    const result = solution(a);
    expect(a.slice(result)).toEqual([0, 0, 0]);
  });
});
