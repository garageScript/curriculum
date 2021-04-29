/* global describe, it */

let solution = require('../5').solution;

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
  it('should return an array with 8,8,9', () => {
    const result = solution(a)
    expect(result).toEqual([{ v: 8 }, { v: 8 }, { v: 9 }])
  })
  it('should return an array with 10', () => {
    const result = solution(g)
    expect(result).toEqual([{ v: 10 }])
  })
  it('should return an array with 3 and 11', () => {
    const result = solution(h)
    expect(result).toEqual([{ v: 3 }, { v: 11 }])
  })
})
