const expect = require('chai').expect;
const solution = require('../6').solution;

describe('js7/6.js check if number x is prime', () => {
    it('first call should return 2', () => {
        const result = solution();
        expect(result()).to.equal(2);
    });
    it('second call should return 3', () => {
        const result = solution();
        result();
        expect(result()).to.equal(3);
    });
    it('first call should start with next prime', () => {
        const result = solution(5);
        expect(result()).to.equal(7);
    });
    it('subsequent call should start with next prime', () => {
        const result = solution(5);
        result();
        expect(result()).to.equal(11);
    });
});
