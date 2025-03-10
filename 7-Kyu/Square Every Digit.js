function squareDigits(num){
    let arr1 = num.toString().split("");
    let arr2=[]; 
    arr1.forEach(element => {
        arr2.push(Math.pow(element,2)); 
    });

    return Number(arr2.join(""));
  }
  console.log(squareDigits(3212));