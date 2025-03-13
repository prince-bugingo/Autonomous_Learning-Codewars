function minMax(arr){
    let array=[];
    let min;
    let max;
    if (arr.length>0) {
      min  = Math.min(...arr);
      max  = Math.max(...arr);
      array.push(min,max);
    
      return  array;
        
    } else{
        array.push(arr[0],arr[0]);
        return  array;
        
    }
    
  }
  console.log([1, 2, 3, 4, 5]);