const expect = require('chai').expect;
let solution = require('../1').solution;

describe('all elements <= 5 is changed to 0', () => {
  it('should handle base case of []', () => {
    const result = solution([]);
    expect(result).to.deep.equal([]);
  });
  it('should return [6,7] when input is [6,7]', () => {
    const result = solution([6,7]);
    expect(result).to.deep.equal([6,7]);
  });
  it('should return [0,0] when input is [3,4]', () => {
    const result = solution([3,4]);
    expect(result).to.deep.equal([0,0]);
  });
  it('should return [0,8,0] when input is [3,8,-5]', () => {
    const result = solution([3,8,-5]);
    expect(result).to.deep.equal([0,8,0]);
  });
});
