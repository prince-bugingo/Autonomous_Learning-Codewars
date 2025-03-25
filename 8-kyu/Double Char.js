function doubleChar(str) {
    let string="";
    for(let i=0;i<str.length;i++){
      string+=str[i];
      string+=str[i];
    }
    return string;
  }
  console.log(doubleChar("abcd"));
  