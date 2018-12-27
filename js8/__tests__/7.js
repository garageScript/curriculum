const expect = require('chai').expect;
const solution = require('../7').solution;

describe('deletionDistance', () => {
  it('should satisfy example 1', () => {
    const result = solution('cat', 'at');
    expect(result).to.equal(99);
  });
  it('should satisfy example 2', () => {
    const result = solution('cat', 'bat');
    expect(result).to.equal(197);
  });
  it('should satisfy example 3', () => {
    const result = solution('boat', 'got');
    expect(result).to.equal(298);
  });
  it('should satisfy example 4', () => {
    const result = solution('thought', 'sloughs');
    expect(result).to.equal(674);
  });
});

