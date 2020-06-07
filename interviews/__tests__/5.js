const expect = require('chai').expect;
const solution = require('../5').solution;

describe('should find mininum time to run tasks', () => {
  it('should handle base case of []', () => {
    const a = [];
    const result = solution(a);
    expect(result).to.equal(0);
  });
  it('should handle base casu', () => {
    const a = [1,2,3];
    const result = solution(a);
    expect(result).to.equal(3);
  });
  it('should handle greedy case', () => {
    const a = [1,2,3,4,5];
    const result = solution(a);
    expect(result).to.equal(5);
  });
  it('should handle non-greedy case', () => {
    const a = [5,4,3,3,3,3,3,3];
    const result = solution(a);
    expect(result).to.equal(9);
  });
});
