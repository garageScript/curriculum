const expect = require('chai').expect;
let solution = require('../1').solution;

describe('max loot', () => {
  it('should find max loot of 1 house', () => {
    const result = solution([100]);
    expect(result).to.equal(100);
  });
  it('should find max loot in a greedy way', () => {
    const result = solution([100, 50, 200, 0]);
    expect(result).to.equal(300);
  });
  it('array of houses where greedy does not work', () => {
    const result = solution([125, 250, 200, 0]);
    expect(result).to.equal(325);
  });
});
