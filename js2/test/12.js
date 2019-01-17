const expect = require('chai').expect;
let solution = require('../12').solution;
solution();

describe('js2/12.js test gsFilter', () => {
    const cb = (e) => {
        return e + 5;
    };
    it('should filter a new array', () => {
        const a = [1, 2, 3];
        a.gsMap(cb);
        expect(a).to.deep.equal([1, 2, 3]);
    });
    it('should filter [] for []', () => {
        expect([].gsMap()).to.deep.equal([]);
    });
    it('should filter a new array', () => {
        const a = [1, 2, 3];
        const c = a.gsMap(cb);
        expect(c).to.deep.equal([6, 7, 8]);
    });
});
