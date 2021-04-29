/* global describe it */

const solution = require('../13').solution;

describe('function should return true if cookie string is valid, if not false', () => {
  it('each key and value are separated by an equal sign "="', () => {
    const cookieStr = 'johndoe123=johnpassword; helloworld=helloworldpwd; foobar=foobarpwd'
    const result = solution(cookieStr)
    expect(result).toBe(true)
  })

  it('each key and value should only be sepeartaed by an equal sign "="', () => {
    const cookieStr = 'johndoe123=johnpassword; helloworld==helloworldpwd; foobar=foobarpwd'
    const result = solution(cookieStr)
    expect(result).toBe(false)
  })

  it('each pair but the last is terminated by a semicolon(;)', () => {
    const cookieStr = 'johndoe123=johnpassword; helloworld=helloworldpwd; foobar=foobarpwd'
    const result = solution(cookieStr)
    expect(result).toBe(true)
  })

  it('each pair but the last should only be terminated by a semicolon(;)', () => {
    const cookieStr = 'johndoe123=johnpassword; helloworld=helloworldpwd; foobar=foobarpwd;'
    const result = solution(cookieStr)
    expect(result).toBe(false)
  })
})
