const solution = require('../2').solution;

describe('land elements', () => {
  it('should handle given base case of [[]]', () => {
    const result = solution([[]]);
    expect(result).toBe(0);
  });
  it('should return 5 for 3x3 sparse matrix', () => {
    const result = solution([[1, 0, 1], [0, 1, 0], [1, 0, 1]]);
    expect(result).toBe(5);
  });
  it('should return 2 for 4x4 matrix', () => {
    const result = solution([[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1]]);
    expect(result).toBe(2);
  });
  it('should return 1 for full island', () => {
    const result = solution([[1, 0, 1], [1, 1, 1], [0, 1, 0]]);
    expect(result).toBe(1);
  });
  it('should return 3 for 3x3 matrix', () => {
    const result = solution([[1, 0, 1], [0, 1, 0], [1, 1, 0]]);
    expect(result).toBe(3);
  });
  it(`should return two for islands that are diagonal
      (North-East, and South-West) of each other`, () => {
    const map = [
      [0, 1],
      [1, 0]
    ];
    const result = solution(map);
    expect(result).toBe(2);
  });
  it(`should return two for islands that are diagonal
      (North-West, and South-East) of each other`, () => {
    const map = [
      [1, 0],
      [0, 1]
    ];
    const result = solution(map);
    expect(result).toBe(2);
  });
  it('should return one island if they are a connected triplet', () => {
    const map = [
      [1, 0],
      [1, 1]
    ];
    const result = solution(map);
    expect(result).toBe(1);
  });
  it('should return one island if they are a connected triplet', () => {
    const map = [
      [1, 1],
      [0, 1]
    ];
    const result = solution(map);
    expect(result).toBe(1);
  });
  it('should return one island if they are a connected triplet', () => {
    const map = [
      [1, 1],
      [1, 0]
    ];
    const result = solution(map);
    expect(result).toBe(1);
  });
  it('should return one island if they are a connected triplet', () => {
    const map = [
      [0, 1],
      [1, 1]
    ];
    const result = solution(map);
    expect(result).toBe(1);
  });
});
