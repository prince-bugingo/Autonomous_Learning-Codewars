function cockroachSpeed(s) {
    let kmToCm= 100000/3600;
    return Math.floor(s*kmToCm)
  }

  console.log(cockroachSpeed(1.09))