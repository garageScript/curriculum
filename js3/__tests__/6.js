/* global describe it expect */
const solution = require('../6').solution

describe('takes an array, returns array of duplicate numbers', () => {
  it('should return []', () => {
    const result = solution([1, 2, 3, 4, 5])
    expect(result).toEqual([])
  })
  it('should return [2, 3, 4]', () => {
    const result = solution([1, 2, 3, 2, 2, 3, 4, 4, 3])
    expect(result).toEqual([2, 3, 4])
  })
  it('should return [23, 12, 45]', () => {
    const result = solution([23, 45, 12, 23, 44, 12, 45])
    expect(result).toEqual([23, 12, 45])
  })
})
