function removeSmallest(numbers) {
    let min;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]<numbers[i+1]) {
            min = numbers[i];
            return min;
        }
    }

    
  }