function removeExclamationMarks(s) {
    let arr= s.split("");
    arr.forEach(element => {
        if (element == "!"){
            arr = arr.removeElement(arr,arr[element]);
        }
        
    });

  
    return arr;
  }

  console.log(removeExclamationMarks("prince"));