/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (a,b = [],existing = {},i = 0,bi = 0)=>{
  if(i === a.length) return b;
  if(!(a[i] in existing)) existing[a[i]] = 1;
  else{ 
    existing[a[i]] += 1;
    if(existing[a[i]] === 2){
      b[bi] = a[i];
      bi += 1;
    }
  }
  return solution(a,b,existing,i+1,bi);
}

module.exports = {
  solution
}
