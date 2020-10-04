const solution = require('../7').solution;

describe('deletionDistance', () => {
  it('should satisfy example 1', () => {
    const result = solution('cat', 'at');
    expect(result).toBe(99);
  });
  it('should satisfy example 2', () => {
    const result = solution('cat', 'bat');
    expect(result).toBe(197);
  });
  it('should satisfy example 3', () => {
    const result = solution('boat', 'got');
    expect(result).toBe(298);
  });
  it('should satisfy example 4', () => {
    const result = solution('thought', 'sloughs');
    expect(result).toBe(674);
  });
});

