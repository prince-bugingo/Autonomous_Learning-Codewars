function addLength(str) {
    let arr = str.split(" ");
    let arr2 = [];
    arr.forEach(element => {
        let length= element.length;
        let temp = element + " " + length;
        arr2.push(temp);
    });
    return arr2;
    }
    
    console.log(addLength("apple ban"));