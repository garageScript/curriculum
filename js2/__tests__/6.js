/* global describe it */
const solution = require('../6').solution

describe('Sequenced Call', function () {
  it('should call 4 functions, 30ms after each run', function (done) {
    let counter = 0
    const fun = () => {
      counter += 1
    }
    const arr = [fun, fun]

    const time = 50
    solution(arr, time)

    let errorMessage = ''
    arr.forEach((_, i) => {
      const value = i + 1
      // Correct
      setTimeout(() => {
        if (counter !== value) {
          errorMessage = `Input function is called too early. expected ${value} calls but receieived ${counter}`
        }
        if (value === arr.length) {
          if (errorMessage) {
            return done(new Error(errorMessage))
          }
          return done()
        }
      }, (i + 1) * time + time / 2)
    })
  })
})
