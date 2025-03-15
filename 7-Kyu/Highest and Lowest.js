function highAndLow(numbers){
    let toArray= numbers.split(" ")
    let sortedArray=toArray.sort((a,b)=>a-b);
    let numbersArray=[];
    sortedArray.forEach(element => {
       numbersArray.push(Number(element));
    });

    let theHighandLow=[];
    theHighandLow.push(numbersArray[numbersArray.length-1],numbersArray[0]);
    return  theHighandLow.join(" ");
  }
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));