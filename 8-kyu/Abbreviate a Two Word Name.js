function abbrevName(name){
    let array = name.split(" ");
    let fName= array[0];
    let sName= array[1];
    let Abbreviated = `${fName[0]}.${sName[0]}`;

    return Abbreviated.toUpperCase();
}
console.log(abbrevName("Sam Harris"));