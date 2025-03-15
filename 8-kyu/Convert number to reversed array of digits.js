function digitize(n) {

    let Array=[];
    let arr= n.toString().split("").reverse();
    arr.forEach(element => {
        let temp = Number(element)
        Array.push(temp)

        
    });
    return Array;

  }
  console.log(digitize(35231));