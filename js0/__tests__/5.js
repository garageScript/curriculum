/* global describe, it, expect */

const solution = require('../5').solution

describe('max 3', () => {
  it('should find the max of 3 numbers', () => {
    const result = solution(6, 6, 7)
    expect(result).toEqual(7)
  })
  it('should find the max of 3 negative numbers', () => {
    const result = solution(-2, -3, -9)
    expect(result).toEqual(-2)
  })
  it('should find the max with positive n negatives', () => {
    const result = solution(-2, -2, 9)
    expect(result).toEqual(9)
  })
  it('should find the max where max is first parametr', () => {
    const result = solution(3, 2, 1)
    expect(result).toEqual(3)
  })
})
