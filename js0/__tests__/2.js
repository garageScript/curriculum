/* global describe, it, expect */

const solution = require('../2').solution

describe('sum of 3 numbers', () => {
  it('should add 3 same numbers correctly', () => {
    const result = solution(6, 6, 6)
    expect(result).toEqual(18)
  })
  it('should add 3 different numbers correctly', () => {
    const result = solution(1, 2, 30)
    expect(result).toEqual(33)
  })
  it('should add 3 negative numbers correctly', () => {
    const result = solution(-2, -2, -5)
    expect(result).toEqual(-9)
  })
  it('should add 3 numbers of different signs correctly', () => {
    const result = solution(-3, 3, -1)
    expect(result).toEqual(-1)
  })
})
