function findAverage(array) {
  return array === null || array.length ===0? 0 : array.reduce((a,b)=>a+b,0)/array.length;
  
  }