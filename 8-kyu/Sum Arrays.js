function sum (numbers) {
    let sum;
    if (numbers.length==0) {
        return 0;
        
    }
    else{
        numbers.forEach(element => {
            sum += element;
            
        });

    }
    return sum;
  }