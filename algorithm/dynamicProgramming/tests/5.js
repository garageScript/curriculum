const expect = require('chai').expect;
const solution = require('../5').solution;

describe('Number of islands', () => {
  it(`should return two for islands that are diagonal
      (North-East, and South-West) of each other`, () => {
    const map = [
      [0, 1],
      [1, 0]
    ];
    const result = solution(map);
    expect(result).to.equal(2);
  });
  it(`should return two for islands that are diagonal
      (North-West, and South-East) of each other`, () => {
    const map = [
      [1, 0],
      [0, 1]
    ];
    const result = solution(map);
    expect(result).to.equal(2);
  });
  it('should return one island if they are a connected triplet', () => {
    const map = [
      [1, 0],
      [1, 1]
    ];
    const result = solution(map);
    expect(result).to.equal(1);
  });
  it('should return one island if they are a connected triplet', () => {
    const map = [
      [1, 1],
      [0, 1]
    ];
    const result = solution(map);
    expect(result).to.equal(1);
  });
  it('should return one island if they are a connected triplet', () => {
    const map = [
      [1, 1],
      [1, 0]
    ];
    const result = solution(map);
    expect(result).to.equal(1);
  });
  it('should return one island if they are a connected triplet', () => {
    const map = [
      [0, 1],
      [1, 1]
    ];
    const result = solution(map);
    expect(result).to.equal(1);
  });
});
