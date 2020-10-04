/* global describe, it */

let solution = require('../3').solution;

describe('Max stock value', () => {
  it('should pick all of the increasing values', () => {
    const arr = [11, 12, 13, 14, 1, 15, 20]
    const result = solution(arr)
    expect(result).toBe(22)
  })
  it('should not buy anything', () => {
    const arr = [10, 9, 8, 7 ,6]
    const result = solution(arr)
    expect(result).toBe(0)
  })
  it('should buy only once at the end', () => {
    const arr = [10, 9, 8, 7 ,18]
    const result = solution(arr)
    expect(result).toBe(11)
  })
  it('should buy only once at the start', () => {
    const arr = [10, 11, 8, 7]
    const result = solution(arr)
    expect(result).toBe(1)
  })
})
