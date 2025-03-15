function whoIsPaying(name){
    let arr1= name.split("");
    let truncated= arr1[0] + arr1[1];
    let arr2=[];
    arr2.push(name,truncated);
    
    return name.length <= 2 ? arr1.join("") : arr2;
  }
  console.log(whoIsPaying("Me"));