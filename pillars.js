function pillars(num_pill, dist, width) {
 if(num_pill == 1){
   return 0;
 }
  return 100 * dist * (num_pill - 1) + width * (num_pill - 2) 
}
