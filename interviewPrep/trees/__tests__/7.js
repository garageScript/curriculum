/* global describe, it */

let solution = require('../7').solution;

const a = { v: 5 }
const b = { v: 6 }
const c = { v: 7 }
const d = { v: 8 }
const e = { v: 8 }
const f = { v: 9 }
const g = { v: 10 }
const h = { v: 2 }
const i = { v: 3 }
const j = { v: 11 }
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
h.left = i
h.right = j

describe('clone a linked list', () => {
  it('should return 3', () => {
    const result = solution(a)
    expect(result).toBe(3)
  })
  it('should return 1', () => {
    const result = solution(g)
    expect(result).toBe(1)
  })
  it('should return 2', () => {
    const result = solution(h)
    expect(result).toBe(2)
  })
})
