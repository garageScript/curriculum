/* global it describe */
const expect = require('chai').expect
const solution = require('../7').solution

describe('find minimum value in rotated sorted array', () => {
  it('should return a number', () => {
    const result = solution([3, 4, 5, 1, 2])
    expect(typeof result).to.equal('number')
  })

  it('positive numbers in array', () => {
    const result = solution([5, 6, 7, 8, 9, 2, 3])
    expect(result).to.equal(2)
  })

  it('should handle positive numbers in array', () => {
    const result = solution([5, 6, 7, 8, 9, 1, 2])
    expect(result).to.equal(1)
  })

  it('[3, 4, 5, 1, 2] should return 1', () => {
    const result = solution([3, 4, 5, 1, 2])
    expect(result).to.equal(1)
  })

  it('[2, 4, 6, 1] should return 1', () => {
    const result = solution([2, 4, 6, 1])
    expect(result).to.equal(1)
  })

  it('[2, 3, 4, 6, 1] should return 1', () => {
    const result = solution([2, 3, 4, 6, 1])
    expect(result).to.equal(1)
  })

  it('[3, 4, 5, 6, 8, 9, 1, 2] should return 1', () => {
    const result = solution([3, 4, 5, 6, 8, 9, 1, 2])
    expect(result).to.equal(1)
  })

  it('[5, 4, 3, 1, 2] should return 1', () => {
    const result = solution([5, 4, 3, 1, 2])
    expect(result).to.equal(1)
  })

  it('[9, 6, 5, 4, 2, 3] should return 2', () => {
    const result = solution([9, 6, 5, 4, 2, 3])
    expect(result).to.equal(2)
  })
})
