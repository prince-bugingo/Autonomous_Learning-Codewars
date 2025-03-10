function highAndLow(numbers){
    let toArray= numbers.split(" ")
    let toAscending = toArray.sort((a,b)=>a-b);
    let numbersArray=[];

    toAscending.forEach(element => {
        numbersArray.push(Number(toAscending[element]))
        
    });

    return  numbersArray;
  }
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))