/* global describe it expect */

const solution = require('../2').solution

const z = () => {
  return 5
}

describe('closure 1', () => {
  it('should call function 0 times', () => {
    const func = solution(0, z)
    expect(func()).toEqual(null)
    expect(func()).toEqual(null)
    expect(func()).toEqual(null)
  })
  it('should call function 1 time, and null afterwards', () => {
    const func = solution(1, z)
    expect(func()).toEqual(5)
    expect(func()).toEqual(null)
    expect(func()).toEqual(null)
  })
  it('should call function 3 times, and null after wards', () => {
    const func = solution(3, z)
    expect(func()).toEqual(5)
    expect(func()).toEqual(5)
    expect(func()).toEqual(5)
    expect(func()).toEqual(null)
    expect(func()).toEqual(null)
    expect(func()).toEqual(null)
    expect(func()).toEqual(null)
  })
})
