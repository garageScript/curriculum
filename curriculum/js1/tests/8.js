const expect = require('chai').expect;
const solution = require('../8').solution;

describe('find greatest common denominator of two positive integers', () => {
  it('15 should be the gcd', () => {
    const result = solution(30, 45);
    expect(result).to.equal(15);
  });
  it('1 should be gcd', () => {
    const result = solution(30, 43);
    expect(result).to.equal(1);
  });
  it('10 should be gcd', () => {
    const result = solution(10, 10);
    expect(result).to.equal(10);
  });
  it('5 should be gcd', () => {
    const result = solution(15, 5);
    expect(result).to.equal(5);
  });
});
