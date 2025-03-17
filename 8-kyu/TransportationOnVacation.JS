function rentalCarCost(d) {
    let totalAmount = d*40;
    
    if (d==1) {
        return totalAmount;
    } else if (d > 1 && d <= 3) 
        { return totalAmount - 20;
      } 
     else if (d == 7) {
        return totalAmount - 50;
     }
  }