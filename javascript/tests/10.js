const expect = require('chai').expect;
const jParse = require('../10');

describe('Given Tests', function() {
  it('should parse {}', function() {
    expect(jParse('{}')).to.deep.equal(JSON.parse('{}'));
});
 it('should parse string', function() {
    expect(jParse('"foo"')).to.deep.equal(JSON.parse('"foo"'));
  });
  it('should parse nested objects', function() {
    expect(jParse('{"hello":"song","friends":{"name":"type"}}')).to.deep.equal(JSON.parse('{"hello":"song","friends":{"name":"type"}}'));
  });
});
