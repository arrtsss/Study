let username
username = prompt("Кто Здесь?");

if( username=="Админ") {

    let pass =    prompt("Пароль?");
     if(pass =="Я Главный"){

        alert("Здравствуйте");
     }
     else if(pass==null||pass==''){
        alert("Отмена");
     }
     else{
             alert("Неверный пароль");
     }
}else if( username== null||username==''){
        alert("Отмена");
}else{
        alert("Я вас не знаю");
}
