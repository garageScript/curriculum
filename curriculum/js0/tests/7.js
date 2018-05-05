const expect = require('chai').expect;
const solution = require('../7').solution;

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
  it('9 should not be prime', () => {
    const result = solution(9);
    expect(result).to.equal(false);
  });
  it('12 should not be prime', () => {
    const result = solution(12);
    expect(result).to.equal(false);
  });
  it('1223 should be prime', () => {
    const result = solution(1223);
    expect(result).to.equal(true);
  });
  it('1226 should not be prime', () => {
    const result = solution(1226);
    expect(result).to.equal(false);
  });
});

