function fuelPrice(litres, pricePerLitre) {
    // 2=< 5cent discount per liter
    // 4=< 10pcent per liter
    // +2 until maxdicount=25cent perliter
    // return  the total cost rounded to 2 decimal places.
    // 1 dollar = 100 cents 

    let discountCount=5;
    let litterInterval=2;
    let pricePerLitreInCents = pricePerLitre*100;
    
    for (let i = 0; i < 13; i++) 
    {
        if (litres>=2 && litres <= 4 && litres%2==0) { return  pricePerLitreInCents *discountCount/100}
    
   litterInterval+=2;
   discountCount+=5;
    }
    
   
     
    
  }