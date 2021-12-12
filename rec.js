function rangeOfNumbers(startNum, endNum) {
  if(startNum >endNum){
  return [];
}else{
const cUp = rangeOfNumbers(startNum, endNum-1)
cUp.push(startNum, endNum);
return cUp;

}}
rangeOfNumbers(1, 5)
