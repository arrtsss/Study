function elevator(left, right, call){
  if(right == call) {
    return "right";
  }
  else if( left == call) {
    return "left";
  }
  else if(Math.abs(call  - left)< Math.abs(call - right)) {
    return 'left';
  }else{
    return 'right';
  }
}
