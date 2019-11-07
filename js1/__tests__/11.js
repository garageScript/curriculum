/* global describe it */

const solution = require('../11').solution

describe('call twice', function () {
  it('should set 2 timeouts of different value', function (done) {
    let errorMessage = ''
    let counter = 0
    const fun = solution(50, () => {
      counter += 1
    })
    if (counter) {
      errorMessage = 'input function should not be called if the returned function was not called'
    }

    fun()
    if (counter) {
      errorMessage = 'input function is called too early'
    }
    setTimeout(() => {
      if (counter) {
        errorMessage = 'Input function is called too early'
      }
    }, 30)

    setTimeout(() => {
      if (!counter) {
        errorMessage = 'Input function was not called on time'
      }
      if (errorMessage) {
        return done(new Error(errorMessage))
      }
      return done()
    }, 60)
  })
})
