/* global describe it */
const solution = require('../5').solution

describe('js2/5.js Delayed Call', function () {
  it('should call 5 functions after 50ms', function (done) {
    let errorMessage = ''
    let counter = 0
    const fun = () => {
      counter += 1
    }
    solution([fun, fun, fun, fun, fun], 50)

    if (counter) {
      errorMessage = `input functions should not be called immediately. Count: ${counter}`
    }

    setTimeout(() => {
      if (counter) {
        errorMessage = `Input function is called too early. Count ${counter}`
      }
    }, 40)

    setTimeout(() => {
      if (counter !== 5) {
        errorMessage = `Expected 5 function calls but only received ${counter}`
      }
      if (errorMessage) {
        return done(new Error(errorMessage))
      }
      return done()
    }, 60)
  })
})
