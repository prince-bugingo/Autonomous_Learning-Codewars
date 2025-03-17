function solution(str){
    let arr=[];
    let reversed="";
    for (let i = 0; i <  str.length; i++) {
          
        arr.push(str[i]);
    }

    for (let j = arr.length-1; j>=0 ; j--) 
        {  
        reversed=reversed+arr[j];
         
    }
       return  reversed;
   }

   console.log(solution("Prince"));