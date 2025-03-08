function sevenAte9(str) {
    let arr =[];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 7 && str[i+1] == 9 && str[i+2] == 7) {
            arr= str.push(str[i]);
            arr= str.push(str[i+2]);
        }
       
   
    }
  
  return arr;
}

console.log(sevenAte9(['7979797']));