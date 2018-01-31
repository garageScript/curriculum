const expect = require('chai').expect;
const solution = require('../9').solution;

describe('find the next number that is divisible by 7', () => {
  it('should return 14 when input is 8', () => {
    const result = solution(8);
    expect(result).to.deep.equal(14);
  })
  it('should return 21 when input is 15', () => {
    const result = solution(15);
    expect(result).to.deep.equal(21);
  });
  it('should return 28 when input is 23', () => {
    const result = solution(23);
    expect(result).to.deep.equal(28);
  });
  it('should return 7 when input is 1', () => {
    const result = solution(1);
    expect(result).to.deep.equal(7);
  });
});
