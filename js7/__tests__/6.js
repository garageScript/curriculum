const solution = require('../6').solution;

describe('check if number x is prime', () => {
  it('first call should return 2', () => {
    const result = solution();
    expect(result()).toBe(2);
  });
  it('second call should return 3', () => {
    const result = solution();
    result();
    expect(result()).toBe(3);
  });
  it('first call should start with next prime', () => {
    const result = solution(5);
    expect(result()).toBe(7);
  });
  it('subsequent call should start with next prime', () => {
    const result = solution(5);
    result();
    expect(result()).toBe(11);
  });
});

