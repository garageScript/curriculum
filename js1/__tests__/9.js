const expect = require('chai').expect;
let solution = require('../9').solution;

describe('find next multiple of 7', () => {
  it('next multiple should be 7', () => {
    const result = solution(1);
    expect(result).to.equal(7);
  });
  it('next multiple should be 21', () => {
    const result = solution(14);
    expect(result).to.equal(21);
  });
  it('next multiple should be 28', () => {
    const result = solution(21);
    expect(result).to.equal(28);
  });
  it('next multiple should be 35', () => {
    const result = solution(28);
    expect(result).to.equal(35);
  });
});
