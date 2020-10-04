const throttle = require('../3');

describe('Throttle', function() {
  it('should be called once, immediately', () => {
    let counter = 0;
    const throttled = throttle(() => (counter += 1), 10);

    throttled();
    expect(counter).toBe(1);
  });

  it('should be called only once in one interval', (done) => {
    let counter = 0;
    const throttled = throttle(() => (counter += 1), 100);

    const validator = () => {
      setTimeout(() => {
        if (counter === 0) {
          return done(new Error('Throttled function was not called'));
        }

        if (counter > 1) {
          return done(
            new Error('Throttled function called more than once in interval')
          );
        }

        return done();
      }, 90);
    };

    validator();
    throttled();
    throttled();
  });

  it('should be called no more than once in each interval', (done) => {
    let counter = 0;
    const throttled = throttle(() => (counter += 1), 100);

    const validator = () => {
      return setTimeout(() => {
        if (counter === 0) {
          return done(new Error('Throttled function was not called'));
        }

        if (counter !== 1) {
          return done(
            new Error('Throttled function called more than once in 1 interval')
          );
        }

        setTimeout(() => {
          if (counter === 1) {
            return done(
              new Error('Throttled function called only once in 2 intervals')
            );
          }

          if (counter > 2) {
            return done(
              new Error(
                'Throttled function called more than 2 times in 2 intervals'
              )
            );
          }

          return done();
        }, 10);
      }, 90);
    };

    validator();
    throttled();
    throttled();
  });

  it('should be called with the last arguments provided', (done) => {
    let argsAreCorrect = false;
    const throttled = throttle((a, b, c) => {
      argsAreCorrect = a === 3 && b === 2 && c === 1;
    }, 100);

    const validator = () => {
      setTimeout(() => {
        if (!argsAreCorrect) {
          return done(
            new Error('Throttled function called more than once in an interval')
          );
        }

        setTimeout(() => {
          if (argsAreCorrect) {
            return done(
              new Error(
                'Throttled function not called with last arguments provided'
              )
            );
          }

          done();
        }, 10);
      }, 90);
    };

    validator();
    throttled(3, 2, 1);
    throttled(2, 2, 2);
  });
});
