function fakeBin(x){
    // let number = Number(x);
    let toArray = x.split("");
    let NumberArray =[];
    toArray.forEach(element => {
        NumberArray.push(Number(element));
    }); 

    for (let i = 0; i < NumberArray.length; i++) {
        if (NumberArray[i]>=5) {
            NumberArray[i]=1;
        } else {
            NumberArray[i]=0;
        }
    }
    return  String(NumberArray.join(""));
}
console.log(fakeBin('45385593107843568'));