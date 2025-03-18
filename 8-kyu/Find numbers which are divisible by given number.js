function divisibleBy(numbers, divisor){
    return numbers.filter(element=>element%divisor==0);

}
console.log(divisibleBy([1,2,3,4,5,6], 2));