function getMiddle(s) {
    let array = s.split("");
    let arr=[];
    let length= array.length;
  
    if (length%2==0) {
        arr.push(array[length/2-1], array[length/2])
    }
    else{
        arr.push(array[Math.floor(length/2)]);
    }
return arr.join("");
  }

console.log(getMiddle("middle"));