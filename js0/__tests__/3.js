/* global describe, it, expect */

const solution = require('../3').solution

describe('greater than 5', () => {
  it('should return false for negative number', () => {
    const result = solution(-5)
    expect(result).toEqual(false)
  })
  it('should return false for 5', () => {
    const result = solution(5)
    expect(result).toEqual(false)
  })
  it('should return false 0', () => {
    const result = solution(0)
    expect(result).toEqual(false)
  })
  it('should return true for big numbers', () => {
    const result = solution(6)
    expect(result).toEqual(true)
  })
})
