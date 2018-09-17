const serialize = require('../4');

describe('Serialize', function() {
  it('should not be called before 10ms', function(done) {
    let calls = [];
    let z = serialize(() => calls.push(Date.now()), 10);
    z();
    setTimeout(() => {
      if (calls.length > 1) {
        return done(new Error('function called too many times'));
      }
      if (calls.length < 1) {
        return done(new Error('function was not called'));
      }
      if (Date.now() - calls[0] > 7) {
        return done(new Error('function was called too early'));
      }
      return done();
    }, 15);
  });

  it('should not be called after 10ms', function(done) {
    let calls = [];
    let z = serialize(() => calls.push(Date.now()), 10);
    z();
    setTimeout(() => {
      if (calls.length > 1) {
        return done(new Error('function called too many times'));
      }
      if (calls.length < 1) {
        return done(new Error('function was not called'));
      }
      if (Date.now() - calls[0] < 12) {
        return done(new Error('function was called too late'));
      }
      return done();
    }, 25);
  });

  it('should not be called before 10ms', function(done) {
    let calls = [];
    let z = serialize(() => calls.push(Date.now()), 10);
    z();
    z();
    setTimeout(() => {
      if (calls.length > 2) {
        return done(new Error('function called too many times'));
      }
      if (calls.length < 2) {
        return done(new Error('function was not enough times'));
      }
      const now = Date.now();
      if (now - calls[0] < 13) {
        return done(new Error('first function was called too early'));
      }
      if (now - calls[1] < 3) {
        return done(new Error('second function was called too early'));
      }
      return done();
    }, 25);
  });

  it('should reset after previous function is done', function(done) {
    let calls = [];
    let z = serialize(() => calls.push(Date.now()), 10);
    z();

    // ignore previous
    setTimeout( () => {
      calls = [];

      z();
      z();
      setTimeout(() => {
        if (calls.length > 2) {
          return done(new Error('function called too many times'));
        }
        if (calls.length < 2) {
          return done(new Error('function was not enough times'));
        }
        const now = Date.now();
        if (now - calls[0] < 12) {
          return done(new Error('first function was called too early'));
        }
        if (now - calls[1] < 2) {
          return done(new Error('second function was called too early'));
        }
        return done();
      }, 25);
    }, 15);
  });

  it('should call function with correct parameters', function(done) {
    const params = [];
    let z = serialize((...a) => {
      params.push(a);
    }, 10);
    z(9, 8, 7);
    z(6, 5, 4);
    z(3, 2, 1);
    setTimeout(() => {
      if (params.length < 3) {
        return done(new Error('function not called enough times'));
      }
      if (params.length > 3) {
        return done(new Error('function called too many times'));
      }
      if (JSON.stringify(params[0]) !== JSON.stringify([9, 8, 7])) {
        return done(new Error('first function called with wrong parameters'));
      }
      if (JSON.stringify(params[1]) !== JSON.stringify([6, 5, 4])) {
        return done(new Error('second function called with wrong parameters'));
      }
      if (JSON.stringify(params[2]) !== JSON.stringify([3, 2, 1])) {
        return done(new Error('third function called with wrong parameters'));
      }
      return done();
    }, 35);
  });
});

