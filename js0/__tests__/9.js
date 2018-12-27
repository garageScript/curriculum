const expect = require('chai').expect;
const solution = require('../9').solution;

describe('Return function that returns sum when it is called', () => {
  it('should add 6, 6 and then 12 correctly', () => {
    const result = solution(6, 6);
    expect(result(12)).to.equal(24);
  });
  it('should add 1, 2 and then 3 correctly', () => {
    const result = solution(1, 2);
    expect(result(3)).to.equal(6);
  });
  it('should add -2, -2 and then -4 correctly', () => {
    const result = solution(-2, -2);
    expect(result(-4)).to.equal(-8);
  });
  it('should add -3, 3 and then 0 correctly', () => {
    const result = solution(-3, 3);
    expect(result(0)).to.equal(0);
  });
});
