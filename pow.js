function pow(x, n) {
  if(n%1==0){
  for (let i = 1; i < n; i++) {
    a *= x;
  }
  return a;
  }
  else {
  alert("Type another n");
  }
}
let x = prompt("x");
let n = prompt("n");
let a = x;
alert(pow(x, n));
