function enough(cap, on, wait) {
    
    let seats = cap-on;
    if (  seats >= wait) {
        return 0;
    }
    else{
        return Math.abs(wait -seats) ;
    }
  }
  console.log(enough(20, 5, 5));