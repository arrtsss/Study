function truncate(str) {
if (str.length <= max) {
    alert( str);
}else{
    alert(` ${str.substr(0,max-3)} ...`);
}
}

let str = prompt('','');
let max = +prompt('','');
truncate(str);
