/* global describe it expect */

const solution = require('../1').solution

describe('Generate 1D array', () => {
  it('should generate 1d array with 0 values', () => {
    const result = solution(0)
    expect(result).to.deepEqual([])
  })
  it('should generate 1d array with 1 values', () => {
    const result = solution(1)
    expect(result).to.deepEqual([0])
  })
  it('should generate 1d array with 5 values', () => {
    const result = solution(5)
    expect(result).to.deepEqual([0, 1, 2, 3, 4])
  })
  it('should generate 1d array with 10 values', () => {
    const result = solution(10)
    expect(result).to.deepEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
