function accum(s) {
	let arr= s.split("")
    let specialArr=[];
    let temp="";
    for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < i; j++) {
         temp = temp+arr[i];
         }
         specialArr.push(temp);
    }
return specialArr;
 
}
console.log(accum("Prince"));

