function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
         if (numbers[i] != numbers[i+1] && numbers[i] != numbers[i+2] && numbers[i] != numbers[i+3]) {
            return numbers[i];
            
         }
        
    }
  }

  console.log(stray( [1, 1, 2]));
  console.log(stray([1, 2, 1] ));
  console.log(stray([2, 1, 1] ));
    
    
    