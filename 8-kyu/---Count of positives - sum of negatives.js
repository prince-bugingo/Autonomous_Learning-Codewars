function countPositivesSumNegatives(input) {
    let array=[];
    let count=0;
    let sum=0;
  if(input !== null)
{ 
    for (let i = 0; i < input.length; i++) {
        if (input[i]>0) {
            count +=1;
        }
        else  {
            sum += input[i];
        }
      }
}
     else 
     {
            return input;
    }

    return array.push(count,sum);
  }

  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])