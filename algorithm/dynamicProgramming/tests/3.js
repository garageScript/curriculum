const expect = require('chai').expect;
let solution = require('../3').solution;

describe('min coin', () => {
  it('should return value for one coin', () => {
    const result = solution([1], 40);
    expect(result).to.equal(40);
  });
  it('should work for 102 value using 1, 100, 2 coins', () => {
    const result = solution([1, 100, 2], 102);
    expect(result).to.equal(2);
  });
  it('should work for 8 value using 1, 4, 5 coins', () => {
    const result = solution([1, 4, 5], 8);
    expect(result).to.equal(2);
  });
});
