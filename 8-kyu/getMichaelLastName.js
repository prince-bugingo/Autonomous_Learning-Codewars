function getMichaelLastName(inputText) {
   
  // let array1 = inputText.split(" ");
  // let array2=[];

  // for (let i = 0; i < array1.length; i++) {
  //   if (array1[i] === "Michael" && typeof array1[i] === "string" && array1[i] != ' ' ){
  //     array2.push(array1[i+1]);
  //   }
  // }
  
  // for (let i = 0; i < array2.length; i++) {
  //   if ( typeof array2[i] === "string" && array2[i] != '' ){
  //     array2.push(array1[i+1]);
  //   }
  // }


  // return array2;

  function getMichaelLastName(inputText) {
     let array1 = inputText.split(" ");
     let array2=[];
     for (let i = 0; i < array1.length; i++) {
       if (array1[i] === "Michael" && array1[i] != ' ' ) 
        {  array2.push(array1[i]); }
        
     }
     return array2;
  }

    







  console.log(getMichaelLastName("Michael  is John Wil hael Wood?"));