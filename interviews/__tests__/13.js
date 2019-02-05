/* global describe it */

const expect = require('chai').expect
const solution = require('../13').solution

describe('function should return true if cookie string is valid, if not false', () => {
  it('each key and value are separated by an equal sign "="', () => {
    const cookieStr = 'johndoe123=johnpassword; helloworld=helloworldpwd; foobar=foobarpwd'
    const result = solution(cookieStr)
    expect(result).to.equal(true)
  })

  it('each key and value should only be sepeartaed by an equal sign "="', () => {
    const cookieStr = 'johndoe123=johnpassword; helloworld==helloworldpwd; foobar=foobarpwd'
    const result = solution(cookieStr)
    expect(result).to.equal(false)
  })

  it('each pair but the last is terminated by a semicolon(;)', () => {
    const cookieStr = 'johndoe123=johnpassword; helloworld=helloworldpwd; foobar=foobarpwd'
    const result = solution(cookieStr)
    expect(result).to.equal(true)
  })

  it('each pair but the last should only be terminated by a semicolon(;)', () => {
    const cookieStr = 'johndoe123=johnpassword; helloworld=helloworldpwd; foobar=foobarpwd;'
    const result = solution(cookieStr)
    expect(result).to.equal(false)
  })
})
