const solution = require('../8').solution;

describe('max loot', () => {
  it('should find max loot of 1 house', () => {
    const result = solution([100]);
    expect(result).toBe(100);
  });
  it('should find max loot in a greedy way', () => {
    const result = solution([100, 50, 200, 0]);
    expect(result).toBe(300);
  });
  it('array of houses where greedy does not work', () => {
    const result = solution([125, 250, 200, 0]);
    expect(result).toBe(325);
  });
  it('25, 100, 80, 0 should return 180', () => {
    const result = solution([25, 100, 80, 0]);
    expect(result).toBe(105);
  });
  it('100, 50, 0, 55 should return 155', () => {
    const result = solution([100, 50, 0, 55]);
    expect(result).toBe(155);
  });
});
