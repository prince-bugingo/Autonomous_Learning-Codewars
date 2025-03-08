function getCount(str) {
    let count=0;
    let Arr= str.split("");
    Arr.forEach(element => {
        if ( element == "a" || element == "e" || element == "i" || element == "o" || element == "u" ) {
            count +=1;
            
        }
        
    });


    return count;
  }

  console.log(getCount("abracadabra"));