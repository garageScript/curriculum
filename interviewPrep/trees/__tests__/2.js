/* global describe, it */

const expect = require('chai').expect
let solution = require('../2').solution

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

describe('All nodes larger than value', () => {
  it('should return []', () => {
    const result = solution(a, 9)
    expect(result).to.deep.equal([])
  })
  it('should return [{val: 9}]', () => {
    const result = solution(a, 8)
    expect(result).to.deep.equal([f])
  })
  it('should return [{val:5}, {val:6}, {val:7}, {val:8}, {val: 8}, {val: 9}]', () => {
    const result = solution(a, 4)
    expect(result).to.deep.equal([a, b, c, d, e, f])
  })
})
