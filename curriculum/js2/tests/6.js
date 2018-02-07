const expect = require('chai').expect;
const solution = require('../6').solution;

describe('add all elements > 5 to array', () => {
  it('should handle base case of []', () => {
    const result = solution([]);
    expect(result).to.deep.equal([]);
  });
  it('should return [6,7] when input is [6,7]', () => {
    const result = solution([6,7]);
    expect(result).to.deep.equal([6,7]);
  });
  it('should return [] when input is [3,4]', () => {
    const result = solution([3,4]);
    expect(result).to.deep.equal([]);
  });
  it('should return [8] when input is [3,8,-5]', () => {
    const result = solution([3,8,-5]);
    expect(result).to.deep.equal([8]);
  });
});
