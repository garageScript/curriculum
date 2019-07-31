const expect = require('chai').expect
const solution = require('../8').solution

describe('should find longest consecutive characters', () => {
  it('should handle first character case', () => {
    const a = solution('AAABBBBAABBBCCCCCCCDDAAAAAAAAAADEFGCC')
    expect(a).to.deep.equal('A 10')
  })
  it('should handle BBBA character case', () => {
    const a = solution('BBBA')
    expect(a).to.deep.equal('B 3')
  })
  it('should handle KUNDMC character case', () => {
    const a = solution('KUNDMC')
    expect(a).to.deep.equal('C 1')
  })
  it('should handle DDADDDADDDDA character case', () => {
    const a = solution('DDADDDADDDDA')
    expect(a).to.deep.equal('D 4')
  })
  it('should handle ABBA character case', () => {
    const a = solution('ABBA')
    expect(a).to.deep.equal('B 2')
  })
  it('should handle ZZTOP character case', () => {
    const a = solution('ZZTOP')
    expect(a).to.deep.equal('Z 2')
  })
  it('should handle MISSISSIPPI character case', () => {
    const a = solution('MISSISSIPPI')
    expect(a).to.deep.equal('P 2')
  })
})
