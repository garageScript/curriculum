/* global describe it */
const solution = require('../10').solution;

describe('Return an array of Fibonacci numbers, given starting sequence [0, 1]', () => {
  it('Given an integer n, return an array of the first n numbers of fibonacci sequence', () => {
    const result = solution(4)
    expect(result).toEqual([0, 1, 1, 2])
  })

  it('Given 5, should return an array of the first 5 numbers of fibonacci sequence', () => {
    const result = solution(5)
    expect(result).toEqual([0, 1, 1, 2, 3])
  })

  it('Given 8, should return an array of the first 8 numbers of fibonacci sequence', () => {
    const result = solution(8)
    expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
  })

  it('Given 2, should return an array of the first 2 numbers of fibonacci sequence', () => {
    const result = solution(2)
    expect(result).toEqual([0, 1])
  })

  it('Given 1, should return an array of the first 1 number of fibonacci sequence', () => {
    const result = solution(1)
    expect(result).toEqual([0])
  })
})
