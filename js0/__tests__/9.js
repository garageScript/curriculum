/* global describe, it, expect */

const solution = require('../9').solution

describe('Return function that returns sum when it is called', () => {
  it('should add 6, 6 and then 12 correctly', () => {
    const result = solution(6, 6)
    expect(result(12)).toEqual(24)
  })
  it('should add 1, 2 and then 3 correctly', () => {
    const result = solution(1, 2)
    expect(result(3)).toEqual(6)
  })
  it('should add -2, -2 and then -4 correctly', () => {
    const result = solution(-2, -2)
    expect(result(-4)).toEqual(-8)
  })
  it('should add -3, 3 and then 0 correctly', () => {
    const result = solution(-3, 3)
    expect(result(0)).toEqual(0)
  })
})
