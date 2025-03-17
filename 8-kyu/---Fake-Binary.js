function fakeBin(x){
    let number = Number(x);
    let array = number.split("");
    for (let i = 0; i < array.length; i++) {
        if (array[1]>=5) {
            array[1]==1;
        } else {
            array[1]==0;
        }
    }
    return number(array.join(""));

}
console.log(fakeBin('45385593107843568'));