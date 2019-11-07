/* global describe, it, expect */

const solution = require('../4').solution

describe('max 3', () => {
  it('should find the max of 2 numbers', () => {
    const result = solution(6, 7)
    expect(result).toEqual(7)
  })
  it('should find the max of 2 negative numbers', () => {
    const result = solution(-2, -9)
    expect(result).toEqual(-2)
  })
  it('should find the max with positive n negatives', () => {
    const result = solution(-2, 9)
    expect(result).toEqual(9)
  })
  it('should find the max where max is first parametr', () => {
    const result = solution(3, 2)
    expect(result).toEqual(3)
  })
})
