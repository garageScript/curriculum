const expect = require('chai').expect;
const curry = require('../5');

describe('js7/5.js Curry', function () {
    let add;
    beforeEach(function () {
        add = (a, b, c) => {
            return a + b + c;
        };
    });

    it('curry should return a function if no parameters are passed in', function () {
        expect(curry(add)).to.be.a('function');
    });
    it('should work if all parameters are passed in', function () {
        const cAdd = curry(add);
        expect(cAdd(1, 2, 3)).to.equal(6);
    });
    it('should return a function if 2 / 3 parameters are passed in', function () {
        const cAdd = curry(add);
        expect(cAdd(1, 2)).to.be.a('function');
    });
    it('should return the result if 1,2 and then 3 is passed in', function () {
        const cAdd = curry(add);
        expect(cAdd(1, 2)(3)).to.eq(6);
    });
    it('should return the result if 1 and then 2,3 is passed in', function () {
        const cAdd = curry(add);
        expect(cAdd(1)(2, 3)).to.eq(6);
    });
    it('should return the result if 1 and then 2 and then 3 is passed in', function () {
        const cAdd = curry(add);
        expect(cAdd(1)(2)(3)).to.eq(6);
    });
});
