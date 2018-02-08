const solution =(a,newArr=[],i=0)=>{
    if(i==a.length){
          return newArr;
        }
    if(a[i]%2!=0){
          newArr.push(0);
        }
    else{
          newArr.push(a[i]);
        }
    return solution(a,newArr,i+1);
};

module.exports = {
    solution,
};
