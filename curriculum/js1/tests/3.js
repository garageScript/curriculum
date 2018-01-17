const expect = require('chai').expect;
let solution = require('../3').solution;

describe('repeat string hello x times', () => {
  it('should repeat string hello 2 times', () => {
    const result = solution(2);
    expect(result).to.equal('hellohello');
  });
  it('should repeat string hello 3 times', () => {
    const result = solution(3);
    expect(result).to.equal('hellohellohello');
  });
  it('should repeat string hello 4 times', () => {
    const result = solution(4);
    expect(result).to.equal('hellohellohellohello');
  });
  it('should repeat string hello 5 times', () => {
    const result = solution(5);
    expect(result).to.equal('hellohellohellohellohello');
  });
})
