/* global expect, describe, it */

let solution = require('../1').solution

const a = { v: 5 }
const b = { v: 6 }
const c = { v: 7 }
const d = { v: 8 }
const e = { v: 8 }
const f = { v: 9 }
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

describe('clone a linked list', () => {
  it('should have the same value as all nodes', () => {
    const result = solution(a)
    expect(result).toEqual(a)
  })
  it('should have different nodes as original linked list', () => {
    const result = solution(a)
    expect(result === a).toEqual(false)
    expect(result.next === b).toEqual(false)
    expect(result.next.next === c).toEqual(false)
    expect(result.next.next.next === d).toEqual(false)
    expect(result.next.next.next.next === e).toEqual(false)
    expect(result.next.next.next.next.next === f).toEqual(false)
    expect(result.next.next.next.next.next.next === undefined).toEqual(true)
  })
})
