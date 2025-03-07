function dnaStrand(dna){
    for (let i = 0; i < dna.length; i++) {
         
        dna.replace("A","T"); //.replace("C","G");
    }
    return dna;
  }

  console.log(dnaStrand("TTTT"));
  

//   ("AAAA"),"TTTT","String AAAA is")
//   ("ATTGC"),"TAACG","String ATTGC is")
//   ("GTAT"),"CATA","String GTAT is")