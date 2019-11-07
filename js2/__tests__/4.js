/* global describe it expect */

const solution = require('../4').solution

describe('Closure forEach', () => {
  it('should always call cb when array length is 1', () => {
    let calls = 0
    const res = solution([9], (e) => {
      expect(e).toEqual(9)
      calls += 1
    })
    res()
    res()
    res()
    expect(calls).toEqual(3)
  })
  it('should call cb with elements in array with size 5', () => {
    let i = 0
    let arr = [8, 9, 4, 6, 7]
    let calls = 0
    const res = solution(arr, (e) => {
      expect(e).toEqual(arr[i])
      calls += 1
      i = (i + 1) % arr.length
    })
    res()
    res()
    res()
    res()
    res()
    res()
    res()
    res()
    res()
    res()
    res()
    expect(calls).toEqual(11)
  })
})
