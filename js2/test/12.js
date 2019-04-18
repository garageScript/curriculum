const expect = require('chai').expect;
let solution = require('../12').solution;
solution();

describe('js2/12.js test gsFilter', () => {
    const cb = (e) => {
        return e.length > 4;
    };
    it('should reduce an array', () => {
        const a = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
        a.gsFilter(cb);
        expect(a).to.deep.equal([ 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present' ])
    });
    it('should reduce [] for []', () => {
        expect([].gsFilter()).to.deep.equal([]);
    });
    it('should reduce a array', () => {
        const a = ['this', 'is', 'a', 'very', 'extravagant', 'sentence']
        const c = a.gsFilter(cb);
        expect(c).to.deep.equal(['extravagant', 'sentence']);
    });
});
