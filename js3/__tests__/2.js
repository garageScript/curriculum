/* globals expect it describe */
const solution = require('../2').solution

describe('given 2 integers, create 2d array of objects.', () => {
  it('should create 5x0 array', () => {
    const result = solution(5, 0)
    expect(result).toEqual([[], [], [], [], []])
  })
  it('should create 0x0 array', () => {
    const result = solution(0, 0)
    expect(result).toEqual([])
  })
  it('should create 3x3 array ', () => {
    const result = solution(3, 3)
    expect(result).toEqual([
      [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
      [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
    ])
  })
  it('should create 1x2 array', () => {
    const result = solution(1, 2)
    expect(result).toEqual([
      [{ x: 0, y: 0 }, { x: 1, y: 0 }]
    ])
  })
  it('should create 2x4 array', () => {
    const result = solution(2, 4)
    expect(result).toEqual([
      [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
      [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }]
    ])
  })
  it('should create 4x4 array', () => {
    const result = solution(4, 4)
    expect(result).toEqual([
      [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
      [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
      [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }],
      [{ x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }]
    ])
  })
})
>>>>>>> effef9137ebb674ed3e47247be04c892bf69f3fe
