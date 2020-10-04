const jParse = require('../10');

describe('Given Tests', function() {
  it('should parse string', function() {
    expect(jParse('"foo"')).toEqual(JSON.parse('"foo"'));
  });
  it('should parse {}', function() {
    expect(jParse('{}')).toEqual(JSON.parse('{}'));
  });
  it('should parse an object', function() {
    expect(jParse('{"hello":"song"}')).toEqual(JSON.parse('{"hello":"song"}'));
  });
  it('should parse an object with 2 keys', function() {
    expect(jParse('{"hello":"song","age":"4h"}')).toEqual(JSON.parse('{"hello":"song","age":"4h"}'));
  });
  it('should parse an object with 3 keys', function() {
    expect(jParse('{"hello":"song","age":"4h","hobby":"piano"}')).toEqual(JSON.parse('{"hello":"song","age":"4h","hobby":"piano"}'));
  });
  it('should parse nested objects', function() {
    expect(jParse('{"hello":"song","friends":{"name":"type"}}')).toEqual(JSON.parse('{"hello":"song","friends":{"name":"type"}}'));
  });
});
