const solution = require('../callbackThrottler').solution;

describe('callback throttler', () => {
  it('should satisfy example 1', () => {
    const result = solution(20, false, true, 0, [0, 10, 20, 30]);
    expect(result).toEqual([0]);
  });
  it('should satisfy example 2', () => {
    const result = solution(20, true, false, 0, [0, 10, 20, 30]);
    expect(result).toEqual([50]);
  });
  it('should satisfy example 3', () => {
    const result = solution(20, false, true, 20, [0, 10, 20, 30]);
    expect(result).toEqual([0, 20]);
  });
  it('should satisfy example 1', () => {
    const result = solution(20, false, true, 0, [0, 10, 40]);
    expect(result).toEqual([0, 40]);
  });
});
