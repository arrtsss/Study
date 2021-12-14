function warnTheSheep(queue) {
  let j = 1;  
for(let i = queue.length - 1 ;i>= 0 ; i--){
  if(queue[i] == "wolf") {
   return "Pls go away and stop eating my sheep" ;
  }
  else if(queue[i] == "sheep"){
    if( queue[i - 1]  == "wolf") {
     return `Oi! Sheep number ${j}! You are about to be eaten by a wolf!` ;
     j++;
    }
    j++
   }
  }
 }
