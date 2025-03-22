function removeSmallest(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]<numbers[i+1]) {
          let item= numbers[i];
        }
    }
    return  numbers.toSpliced(item,1)
  }
  console.log(removeSmallest([1, 2, 3, 4, 5]));