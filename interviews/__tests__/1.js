/* global it describe */
const solution = require('../1').solution;

describe('2sum consecutive', () => {
  it('should handle base case of []', () => {
    const result = solution([], 10)
    expect(result).toBe(false)
  })
  it('should handle case with negative numbers', () => {
    const result = solution([-1, 1, 3], 0)
    expect(result).toBe(true)
  })
  it('should handle case with no results', () => {
    const result = solution([-1, 10, 3], 8)
    expect(result).toBe(false)
  })
  it('should handle case with result at end', () => {
    const result = solution([-1, 10, 3], 13)
    expect(result).toBe(true)
  })
  it('should handle flase case with non-consecutive sum', () => {
    const result = solution([-1, 10, 3], 2)
    expect(result).toBe(false)
  })
})
