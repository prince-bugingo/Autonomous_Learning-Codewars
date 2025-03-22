function removeUrlAnchor(url){
    let index= url.indexOf('#');
    let str = "";
    let array = url.split("");
if (array.includes("#")) {
  for (let i = 0; i <array.length; i++) {
    if(i<index){
      str += array[i];
    }
  }
  return str;
}
else{
  return url;
}
  }
console.log(removeUrlAnchor('www.codewars.com/katas/#dfmdkfm'));