function reverseWords(str) {
    let array= str.split(" ");
    let reversed=[];
    array.forEach(element => {
       reversed.push(element.split("").reverse().join(""));
    });
    return reversed.join(" ");
  }
  console.log(reverseWords("This is an example!"));