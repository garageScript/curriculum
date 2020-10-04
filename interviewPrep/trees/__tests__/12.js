/* global describe, it */

let solution = require('../12').solution;

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

const g = { val: 4 }
const h = { val: 8 }
const i = { val: 9 }
g.left = h
g.right = i

const z = { v: 5 }
const y = { v: 6 }
const x = { v: 7 }
const w = { v: 8 }
const v = { v: 8 }
const u = { v: 9 }
z.left = y
z.right = x
y.left = w
y.right = v
x.left = u

describe('Matching all nodes in trees', () => {
  it('should return true', () => {
    const result = solution(a, z)
    expect(result).toBe(true)
  })
  it('should return false', () => {
    const result = solution(a, g)
    expect(result).toBe(false)
  })
})
