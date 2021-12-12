function chekSpam(str) {
  let s = str.toUpperCase();
  let chec = s.includes("VIAGRA");
  let chec2 = s.includes("XXX");
  if (chec === true || chec2 === true) {
    return true;
  } else {
    return false;
  }
}
str = prompt("");
alert(chekSpam(str));
