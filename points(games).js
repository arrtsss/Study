function points(games) {
    let j = 0;
    for(game of games){
     let x = game.split(':');
      if((+x[0])>(+x[1])){
       j += 3;
      }else if((+x[0])==(+x[1])) {
        j += 1;
      }else{
        j+=0;
      }
    }
    return j; 
}
