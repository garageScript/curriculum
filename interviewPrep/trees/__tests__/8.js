/* global describe, it */

let solution = require('../8').solution;

const a = { v: 5 }
const b = { v: -6 }
const c = { v: 7 }
const d = { v: 8 }
const e = { v: -8 }
const f = { v: 9 }
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

const z = { val: -5 }
const y = { val: -7 }
const x = { val: -10 }
z.left = x
z.right = y

const w = { val: 10 }

describe('Sum of all nodes', () => {
  it('should return 15', () => {
    const result = solution(a)
    expect(result).toBe(15)
  })
  it('should return -22', () => {
    const result = solution(z)
    expect(result).toBe(-22)
  })
  it('should return 10', () => {
    const result = solution(w)
    expect(result).toBe(10)
  })
})
