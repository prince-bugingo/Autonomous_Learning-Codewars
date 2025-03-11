function enough(cap, on, wait) {
    // canCarry= cap;
    let seats = cap-on;
    if (  seats == wait) {
        return 0;
    }
    else{
        return wait -seats;
    }
  }
  console.log(enough(100, 60, 50));