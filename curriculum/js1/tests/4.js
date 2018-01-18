const expect = require('chai').expect;
let solution = require('../4').solution;

describe('print string x number of times', () => {
  it('should repeat empty string 2 times', () => {
    const result = solution(2, '');
    expect(result).to.equal('');
  });
  it('should repeat string 3 times', () => {
    const result = solution(3, 'hello');
    expect(result).to.equal('hellohellohello');
  });
  it('should repeat string 4 times', () => {
    const result = solution(4,'hello');
    expect(result).to.equal('hellohellohellohello');
  });
  it('should repeat string 5 times', () => {
    const result = solution(5, 'hello');
    expect(result).to.equal('hellohellohellohellohello');
  });
})
