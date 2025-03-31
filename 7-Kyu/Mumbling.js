function accum(s) {
 let array= s.toLowerCase().split("");
 let MumbleArr=[];
 let FinalArray=[];
 for (let i = 0; i < array.length; i++) {
    let str="";
      for (let j = 0; j <= i; j++) {
       str= str + array[i];
      }
      MumbleArr.push(str);
 }

 MumbleArr.forEach(element => {
   FinalArray.push(element.charAt(0).toUpperCase()+element.slice(1)) ;
 });
    
 return FinalArray.join("-");
}
console.log(accum("ZpglnRxqenU"));