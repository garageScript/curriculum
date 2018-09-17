const throttle = require('../3');

describe('Throttle', function() {
  it('should not be called before 10ms', function(done) {
    let counter = 0;
    let z = throttle(() => counter += 1, 10);
    z();
    setTimeout(() => {
      if (!counter) return;
      return done(new Error('Throttled function is called before 10ms'));
    }, 5);
    setTimeout(() => {
      if (counter) return done();
      return done(new Error('Throttled function is called before 10ms'));
    }, 15);
  });

  it('should not be called before 10ms with multiple calls', function(done) {
    let z = throttle(() => counter += 1, 10);
    let counter = 0;
    z();
    z();
    z();
    z();
    setTimeout(() => {
      if (!counter) return;
      return done(new Error('Throttled function is called before 10ms'));
    }, 5);
    setTimeout(() => {
      if (counter === 1) return done();
      return done('Throttled function is called incorrect number of times');
    }, 35);
  });

  it('throttle should be called with correct parameters', function(done) {
    let finished = false;
    let z = throttle((a, b, c) => {
      if (a === 3 && b === 2 && c === 1) {
        finished = true;
        return done();
      }
      return done('Throttled function is not called with correct params');
    }, 10);
    z(9, 8, 7);
    z(6, 5, 4);
    z(3, 2, 1);
    setTimeout(() => {
      if (finished) return;
      return done(new Error('Throttled function is not called'));
    }, 14);
  });

  it('throttle should be called after every 10ms', function(done) {
    let counter = 0;
    let z = throttle(() => counter += 1, 10);
    z();
    z();
    setTimeout(() => {
      z();
      z();
      setTimeout(() => {
        if (counter === 2) return done();
        return done(new Error('Throttled function is not called every 10ms'));
      }, 11);
    }, 14);
  });
});

