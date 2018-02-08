const solution=(a,i=0,newArr=[])=>{
  if(i==a.length){
    return newArr;
  }
  if(a[i]<5){
    newArr.push(0);
  }
  else{
    newArr.push(a[i]);
  }
  return solution(a,i+1, newArr);
};

module.exports = {
  solution,
};
