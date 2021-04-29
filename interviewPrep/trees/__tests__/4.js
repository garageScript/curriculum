/* global describe, it */

let solution = require('../4').solution;

const a = { v: 5 }
const b = { v: 6 }
const c = { v: 7 }
const d = { v: 8 }
const e = { v: 8 }
const f = { v: 9 }
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

describe('All nodes at given level', () => {
  it('should return no level []', () => {
    const result = solution(a, 0)
    expect(result).toBe([])
  })
  it('should return 1st level [5]', () => {
    const result = solution(a, 1)
    expect(result).toEqual([5])
  })
  it('should return 3rd level [8, 8, 9]', () => {
    const result = solution(a, 3)
    expect(result).toEqual([8, 8, 9])
  })
})
