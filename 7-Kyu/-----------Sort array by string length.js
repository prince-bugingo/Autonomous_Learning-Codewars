function sortByLength (array) {
     for (let i = 0; i < array.length; i++) {
         if (array[i].length > array[i+1].length) {
          let temp = array[i];
          array[i]=array[i+1];
          array[i+1]=temp;
         }  
     }
      return array;
  }
  console.log(sortByLength("Beg", "Life", "I", "To"));