/* global describe, it, expect */

const solution = require('../6').solution

describe('First is bigger', () => {
  it('should return false when input is -21, 0', () => {
    const result = solution(-21, 0)
    expect(result).toEqual(false)
  })
  it('should return false when input is -21, -20', () => {
    const result = solution(-21, -20)
    expect(result).toEqual(false)
  })
  it('should return false when input is 0, 5', () => {
    const result = solution(0, 5)
    expect(result).toEqual(false)
  })
  it('should return true when input is 6, 5', () => {
    const result = solution(6, 5)
    expect(result).toEqual(true)
  })
})
