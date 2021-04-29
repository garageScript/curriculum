/* global describe, it */

let solution = require('../2').solution;

const a = { v: -10 }
const b = { v: 11 }
const c = { v: 7 }
const d = { v: 8 }
const e = { v: 8 }
const f = { v: 90 }
const nfl = { v: -1 }
const nfr = { v: -1 }
const el = {v: 20}
const ell = {v: 20}
const elll = {v: 20}
const ellll = {v: 20}
const elllll = {v: 20}
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
f.left = nfl
f.right = nfr
e.left = el
el.left = ell
ell.left = elll
elll.left = ellll
ellll.left = elllll

describe('Max value given steps', () => {
  it('should not take any steps if no steps', () => {
    const result = solution(a, 0)
    expect(result).toBe(0)
  })
  it('should not take any steps if only one negative step', () => {
    const result = solution(a, 1)
    expect(result).toBe(0)
  })
  it('should take 2 steps including a negative step if given 2 steps', () => {
    const result = solution(a, 2)
    expect(result).toBe(1)
  })
  it('should take non greedy approach for 3 steps', () => {
    const result = solution(a, 3)
    expect(result).toBe(87)
  })
  it('should take non greedy approach for > 3 steps', () => {
    const result = solution(a, 5)
    expect(result).toBe(87)
  })
  it('should take non greedy approach for > 3 steps', () => {
    const result = solution(a, 9)
    expect(result).toBe(109)
  })
})
