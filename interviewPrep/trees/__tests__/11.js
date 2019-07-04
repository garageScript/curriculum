/* global describe, it */

const expect = require('chai').expect
let solution = require('../11').solution

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

describe('clone a linked list', () => {
  it('should return 2', () => {
    const result = solution(a, 8)
    expect(result).to.equal(2)
  })
  it('should return 0', () => {
    const result = solution(a, 12)
    expect(result).to.equal(0)
  })
  it('should return 1', () => {
    const result = solution(a, 5)
    expect(result).to.equal(1)
  })
})
