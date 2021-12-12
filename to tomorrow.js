
function getSecondsToday(date) {
    let hourrrs = new Date(date.getFullYear() ,date.getMonth() ,(date.getDate()+1))
    let millsek = hourrrs.getTime() - date.getTime() ;
    return  Math.round(millsek/1000);
    
    }
    let date = new Date();
    alert(getSecondsToday(date));
