/* global describe it */

const solution = require('../12').solution

describe('call twice', function () {
  it('should set 2 timeouts of different value', function (done) {
    let errorMessage = ''
    let counter = 0
    solution(50, () => {
      counter += 1
      return 80
    })
    // counter should be 1 after 50, then 2 after 80
    if (counter) {
      errorMessage = 'input function is called too early'
    }

    setTimeout(() => {
      if (counter) {
        errorMessage = 'Input function is called too early'
      }
    }, 40)

    setTimeout(() => {
      if (counter !== 1) {
        errorMessage = `Input function is either not called the first time, or called too many times. Count: ${counter}`
      }
    }, 120)

    setTimeout(() => {
      if (counter !== 2) {
        errorMessage = `Input function is either not called the first time, or called too many times. Count: ${counter}`
      }
      if (errorMessage) {
        return done(new Error(errorMessage))
      }
      return done()
    }, 140)
  })
})
