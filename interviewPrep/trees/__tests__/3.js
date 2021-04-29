/* global describe, it */

let solution = require('../3').solution;

const a = { val: 5 }
const b = { val: 6 }
const c = { val: 7 }
const d = { val: 8 }
const e = { val: 8 }
const f = { val: 9 }
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

describe('Takes in a root node and function', () => {
  it('should return 2', () => {
    const result = solution(a, (val) => {
      return 5
    })
    expect(a).toEqual({
      val: 5,
      left: {
        val: 5,
        left: {
          val: 5
        },
        right: {
          val: 5
        }
      },
      right: {
        val: 5,
        left: {
          val: 5
        }
      }
    })
  })
})
