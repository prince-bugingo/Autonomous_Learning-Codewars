function arrayMadness(a, b) {
    let sumSpuares=0;
    let sumCubes=0;
    let squareArray=[];
    let squarewCubes=[];

    a.forEach(element => {
        squareArray.push(Math.pow(element,2))  
    });

    b.forEach(element => {
        squarewCubes.push(Math.pow(element,3))  
    });
   
    sumSpuares = squareArray.reduce((a,b)=>a+b);
    sumCubes = squarewCubes.reduce((a,b)=>a+b);

    if (sumSpuares>sumCubes) { return true;
        
    } else { return false;
        
    }
}
console.log(arrayMadness([4,5,6],[1,2,3]));