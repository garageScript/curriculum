const expect = require('chai').expect;
const jParse = require('../10');

describe('js7/10.js Given Tests', function () {
    it('should parse string', function () {
        expect(jParse('"foo"')).to.deep.equal(JSON.parse('"foo"'));
    });
    it('should parse {}', function () {
        expect(jParse('{}')).to.deep.equal(JSON.parse('{}'));
    });
    it('should parse an object', function () {
        expect(jParse('{"hello":"song"}')).to.deep.equal(JSON.parse('{"hello":"song"}'));
    });
    it('should parse an object with 2 keys', function () {
        expect(jParse('{"hello":"song","age":"4h"}')).to.deep.equal(JSON.parse('{"hello":"song","age":"4h"}'));
    });
    it('should parse an object with 3 keys', function () {
        expect(jParse('{"hello":"song","age":"4h","hobby":"piano"}')).to.deep.equal(JSON.parse('{"hello":"song","age":"4h","hobby":"piano"}'));
    });
    it('should parse nested objects', function () {
        expect(jParse('{"hello":"song","friends":{"name":"type"}}')).to.deep.equal(JSON.parse('{"hello":"song","friends":{"name":"type"}}'));
    });
});