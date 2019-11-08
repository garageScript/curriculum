const solution = require('../8').solution;

describe('It should call each function value of the object millieseconds after one another', () => {
    it('It should not call the function if the object is empty', (done) => {
      let sum = 0;
      const a = {};
      solution(a, 200);
      expec(sum).toEqual(0);
    });
   it('Sum will be 0, "one", "onetwo" after  ', (done) =>{
    let sum = 0;
    const a = {
      'one': (d) => sum += d,
      'two': (c) => sub += e,
    };
    solution(a, 100);

    setTimeout(() => {
      expect(sum).toEqual(0);
    }, 50);

    setTimeout(() => {
      expect(sum).toEqual('one');
    }, 150);

    setTimeout(() => {
      expect(sum).toEqual('onetwo');
      done();
    }, 250);
  });
});

