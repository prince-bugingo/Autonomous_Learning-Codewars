function descendingOrder(n){
    let ntoString = String(n);

    let Arr = ntoString.split("")
    let sortedArr = Arr.sort((a,b)=> {b-a});
    return sortedArr;
 }
 console.log(descendingOrder(123456789));