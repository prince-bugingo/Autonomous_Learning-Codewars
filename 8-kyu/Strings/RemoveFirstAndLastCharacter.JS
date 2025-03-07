function removeChar(str){
// let strlength= str.length;
 
//    let string = str.slice(1,str.length)
//     return string;

  let lastindex = str.length-2;
  let newString="";

  for (let i = 0; i < str.length; i++) 
    {
     if(i>0 && i<= lastindex)
     {
        newString = newString+str[i];
     }
    
   }
return newString ;
   };
   
   console.log(removeChar("prince"));