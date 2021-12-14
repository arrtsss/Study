function arrayDiff(a, b) {
    let s =[]; 
   let l = [];
 if(a.length == 0) {return a;}
if(b.length == 0) {return a;}
 if(a===b) {return [];}   
  
for(let i= 0;i<a.length;i++){
  for(let j=0;j<b.length;j++){
    if(a[i]===b[j]){
      s.push(a.indexOf(a[i]));
      }
    } 
}  
for(let m = 0; m < a.length;m++) {
 if(a.indexOf(a[m]) !== s[0]){ 
   l.push(a[m]);}
  else if(a.indexOf(a[m]) === s[0] ){
    s.shift(0);
  }
  }
  return l;
  }
