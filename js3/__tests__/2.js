const solution = require('../2').solution;

describe('given 2 integers, create 2d array of objects.', () => {
  it('should return ', () => {
    const result = solution(3, 3);
    expect(result).toEqual([
      [{x: 0, y: 0}, {x: 1, col: 0}, {x: 2, col: 0}],
      [{x: 0, y: 1}, {x: 1, col: 1}, {x: 2, col: 1}],
      [{x: 0, y: 2}, {x: 1, col: 2}, {x: 2, col: 2}],
    ]);
  });
  it('should return ', () => {
    const result = solution(1, 2);
    expect(result).toEqual([
      [{x: 0, y: 0}, {x: 1, col: 0}],
    ]);
  });
  it('should return ', () => {
    const result = solution(2, 4);
    expect(result).toEqual([
      [{x: 0, y: 0}, {x: 1, col: 0}, {x: 2, col: 0}, {x: 3, col: 0}],
      [{x: 0, y: 1}, {x: 1, col: 1}, {x: 2, col: 1}, {x: 3, col: 1}],
    ]);
  });
  it('should return', () => {
    const result = solution(4, 4);
    expect(result).toEqual([
      [{x: 0, y: 0}, {x: 1, col: 0}, {x: 2, col: 0}, {x: 3, col: 0}],
      [{x: 0, y: 1}, {x: 1, col: 1}, {x: 2, col: 1}, {x: 3, col: 1}],
      [{x: 0, y: 2}, {x: 1, col: 2}, {x: 2, col: 2}, {x: 3, col: 2}],
      [{x: 0, y: 3}, {x: 1, col: 3}, {x: 2, col: 3}, {x: 3, col: 3}],
    ]);
  });
});
