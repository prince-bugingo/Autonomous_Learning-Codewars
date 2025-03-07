function closeCompare(a, b, margin){
    /* a<b      r -1, 
    a>b         r  1,
    a closer to b r0    "if margin > || == absolute distance a-b" */
    let absoluteAB=Math.abs(a,b);

    if( margin>= absoluteAB) {return 0}
    

    if (a<b) {return -1;}
    else   {return 1}
     
  }

  console.log(closeCompare(2, 5, 3) );
  
  