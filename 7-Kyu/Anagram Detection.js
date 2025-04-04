
var isAnagram = function(test, original) {

    let sort1= test.toLowerCase().split("").sort().join("");
    let sort2= original.toLowerCase().split("").sort().join("");
  return sort1==sort2 ? true:false;
 
}

console.log(isAnagram("Pir","irP"));

         
