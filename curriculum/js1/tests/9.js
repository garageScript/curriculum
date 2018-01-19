const expect = require('chai').expect;
const solution = require('../9').solution;

describe('check if number x is prime', () => {
  it('2 should be prime', () => {
    const result = solution(2);
    expect(result).to.equal(true);
  });
  it('3 should be prime', () => {
    const result = solution(3);
    expect(result).to.equal(true);
  });
  it('1 should not be prime', () => {
    const result = solution(1);
    expect(result).to.equal(false);
  });
  it('7 should be prime', () => {
    const result = solution(7);
    expect(result).to.equal(true);
  });
});
