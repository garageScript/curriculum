const expect = require('chai').expect;
const solution = require('../6').solution;

describe('filter an object if the condition is true', () => {
   it('should return base case', () =>{
    const obja = {};

    const result = solution(obja,(k,v)=>{return v.length>3});
    expect(result).to.deep.equal({});
  });
 
  it('should return {5:blah blah,zolo:4thech} for input {5:blah blah, name:ho, zolo:4thech', () =>{
    const obja = {5:'blah blah',name:'ho',zolo:'4thech'};

    const result = solution(obja,(k,v)=>{return v.length>3});
    expect(result).to.deep.equal({5:'blah blah',zolo:'4thech'});
  });
  it('should return {5:blah blah} for input {5:blah blah, name:ho, zolo:4thech', () =>{
    const obja = {5:'blah blah',name:'ho',zolo:'4thech'};

    const result = solution(obja,(k,v)=>{return v.length>7});
    expect(result).to.deep.equal({5:'blah blah'});
  });

});

