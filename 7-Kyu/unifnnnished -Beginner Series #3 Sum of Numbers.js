function getSum(a, b)

{
    let arr=[a,b];
    let orderedarr=arr.sort((a,b)=>a-b);
    let sum=0;

    // for (let i = orderedarr[0]; i < orderedarr[1]; i++) {
         
    //     if (i%2==0) {
    //         sum += i;
    //     }
    //     else if (orderedarr[0] == orderedarr[1]) {
    //         return orderedarr[0];
    //     }
    // }
    
 return orderedarr;
}
console.log(getSum(0,-1));