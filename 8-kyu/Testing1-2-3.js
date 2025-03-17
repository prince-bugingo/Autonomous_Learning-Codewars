var number=function(array){
    let arr = [];
    let splittedarray = array.split("");

    for (let i = 0; i < splittedarray.length; i++) {
        let tempo = ` ${i}${": "}${array[i]}`;
        arr.push(tempo);
        
        }
    return arr;
  }
  console.log(number(["a","b","c"]));
  