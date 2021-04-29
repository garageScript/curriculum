const solution = require('../7').solution

describe('11 characters', () => {
  it('should handle first character case', () => {
    const a = solution(13, ['abc', 'xyz', 'foobar', 'cuckoo', 'seven', 'hello'])
    expect(a).toEqual(['abc xyz', 'foobar cuckoo', 'seven hello'])
  })
})
