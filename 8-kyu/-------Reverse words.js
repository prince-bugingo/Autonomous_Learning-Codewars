function reverseWords(str) {
     let arr = str.split(" ");
     let concatString;
     let newArr;

     for (let i = arr.length-1; i =0 ; i--) {
        let temp = arr[i];
        for (let j = temp.length-1; j = 0; j--) {
            concatString += j;   
        }
        newArr.push(concatString);
     }
     return newArr;
  }
  console.log(reverseWords("The quick brown fox jumps over the lazy dog.'"));