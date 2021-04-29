/* global describe, it */

let solution = require('../6').solution;

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

describe('Change all left-most nodes to number', () => {
  it('should return {val: 5, left: {val:1, left: {val:1}, right: {val:8}}, right: {val: 7, left: {val:9}}}', () => {
    const result = solution(a, 1)
    expect(a).toEqual(
      { val: 5, left: { val: 1, left: { val: 1 }, right: { val: 8 } }, right: { val: 7, left: { val: 9 } } }
    )
  })
})
