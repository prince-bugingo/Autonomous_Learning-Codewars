function solution(nums){
    if (nums ==0 || nums.length == 0) {
        return  []; 
    }
    else{
              return nums.sort((a,b)=>a-b);
    }
  }
  console.log(solution([4,5,6,21,2,]))