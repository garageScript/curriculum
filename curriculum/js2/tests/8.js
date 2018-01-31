const expect = require('chai').expect;
const solution = require('../8').solution;

describe('add two numbers, return greatest common denominator', () => {
  it('should return 3 when input is 3,9', () => {
    const result = solution(3,9);
    expect(result).to.deep.equal(3);
  });
  it('should return 3 when input is 1023,1026', () => {
    const result = solution(1023,1026);
    expect(result).to.deep.equal(3);
  });
  it('should return 8 when input is 888,832', () => {
    const result = solution(888,832);
    expect(result).to.deep.equal(8);
  });
  it('should return 9 when input is 108,9', () => {
    const result = solution(108,9);
    expect(result).to.deep.equal(9);
  });
});
