function random(a,b) {
let a = +prompt('',"");
let b = +prompt('',"");
    if (a>b) {

       return Math.random() * a +b ;
    }else{
       return Math.random() * b +a;
    }
}
alert(random());
