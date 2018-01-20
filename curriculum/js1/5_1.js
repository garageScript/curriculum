const funct = (x,i=1)=>{
  if(i!=x){
    return i;
  }
  return funct(x-1, i+1);
}

const solution = (funct,x,i=0,sum=0)=>{
  if(i===x){
    return sum;
  }
  sum=sum+funct(x);
  return solution(funct,x,i+1,sum);
}
module.exports = {
  solution
}
