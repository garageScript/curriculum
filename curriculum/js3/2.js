/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @param return {number}
 */

const solution = (arr,i=0,obj={})=>{
  if(i==arr.length){
    let val = Object.values(obj);
    console.log(val);
    let val1 = Math.max(...val);
    let key = Object.keys(obj);
    return key[val.indexOf(val1)]
  }
  if(!obj[arr[i]]){
    obj[arr[i]] = 1;
  }else{
    obj[arr[i]] = obj[arr[i]]+1;
  }
return solution(arr,i+1,obj)
}
module.exports = {
  solution
}
