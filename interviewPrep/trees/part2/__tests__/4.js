/* global describe, it */

const solution = require('../4').solution;

describe('Max stock value with transaction fee', () => {
  it('should only buy at the end', () => {
    const arr = [11, 12, 13, 14, 1, 12, 30]
    const result = solution(arr)
    expect(result).toBe(9)
  })
  it('should not buy anything', () => {
    const arr = [10, 9, 8, 7 ,6]
    const result = solution(arr)
    expect(result).toBe(0)
  })
  it('should buy at the start and sell at the end', () => {
    const arr = [10, 20, 30, 40, 50]
    const result = solution(arr)
    expect(result).toBe(20)
  })
  it('should buy at the start and sell at the end', () => {
    const arr = [10, 30, 50, 55]
    const result = solution(arr)
    expect(result).toBe(25)
  })
})

