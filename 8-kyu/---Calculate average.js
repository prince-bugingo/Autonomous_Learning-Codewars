function findAverage(array) {
    let arr= array.reduce((a,b)=>a+b,0)/array.length;
    return arr;
  }

  console.log([1,2,3]);