function smash (words) {
    let sentence="";
     for (let i = 0; i < words.length; i++) {

        sentence = sentence + " " + words[i];

         
        
     }
     let trimedSentence= sentence.trim();
     return sentence;
 };

 console.log(smash(["hello", "amazing", "world"]));
 