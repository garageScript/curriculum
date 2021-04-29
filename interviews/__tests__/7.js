/* global it describe */
const solution = require('../7').solution;

describe('find minimum value in rotated sorted array', () => {
  it('should return a number', () => {
    const result = solution([3, 4, 5, 1, 2])
    expect(typeof result).toBe('number')
  })

  it('should handle positive numbers in array', () => {
    const result = solution([3, 4, 5, 1, 2])
    expect(result).toBe(1)
  })

  it('[4, 5, 6, 7, 0, 1, 2] should return 0', () => {
    const result = solution([4, 5, 6, 7, 0, 1, 2])
    expect(result).toBe(0)
  })

  it('[2, 4, 6, 1] should return 1', () => {
    const result = solution([2, 4, 6, 1])
    expect(result).toBe(1)
  })

  it('[5, 4, 3, 0, 1, 2] should return 1', () => {
    const result = solution([5, 4, 3, 0, 1, 2])
    expect(result).toBe(0)
  })

  it('[9, 6, 5, 4, 0, 2] should return 2', () => {
    const result = solution([9, 6, 5, 4, 0, 2])
    expect(result).toBe(0)
  })
})
