function gimme (triplet) {
    let sortedArray= triplet.sort((a,b)=>a-b);
    let element= sortedArray[1];
    let index= triplet.indexOf(element);
    return index;
}
console.log(gimme([5.9, 10.4, 14.2]));