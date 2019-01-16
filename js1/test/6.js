const expect = require('chai').expect;
const solution = require('../6').solution;

describe('sum divisors of number x', () => {
  it('should sum divisors of 6', () => {
    const result = solution(6);
    expect(result).to.equal(5);
  });
  it('should sum divisors of 9', () => {
    const result = solution(9);
    expect(result).to.equal(3);
  });
  it('should sum divisors of 15', () => {
    const result = solution(15);
    expect(result).to.equal(8);
  });
  it('should sum divisors of 20', () => {
    const result = solution(20);
    expect(result).to.equal(21);
  });
});
