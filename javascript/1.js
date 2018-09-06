// write your code here!
const cat = () => {
  // how do you clear time out?
};


describe('sum of 2 numbers', () => {
  it('should handle setTimeouts normally after clearing', (done) => {
    cat();
    let start = Date.now();
    let end = Date.now();
    setTimeout( () => {
      end = Date.now();
    }, 10);
    setTimeout( () => {
      return end - start >= 5
        ? done()
        : done('setTimeout stopped working normally');
    }, 15);
  });

  it('normal cleartimeout still works', (done) => {
    let timedOut = false;
    const timer = setTimeout( () => timedOut = true, 10);
    setTimeout( () => {
      return timedOut ? done() : done('setTimeout stopped working normally');
    }, 15);
  });

  it('should clear timeout immediately', (done) => {
    cat();
    setTimeout( () => {
      done("timeout is not cleared");
    }, 10);
    setTimeout( () => {
      done("timeout is not cleared");
    }, 10);
    cat();
    oldTimeout( () => {
      done();
    }, 15);
  });

  it('should clear timeout after a small wait', (done) => {
    cat();
    setTimeout( () => {
      done("timeout is not cleared");
    }, 10);
    setTimeout( () => {
      cat();
    }, 5);
    oldTimeout( () => {
      done();
    }, 15);
  });
});
