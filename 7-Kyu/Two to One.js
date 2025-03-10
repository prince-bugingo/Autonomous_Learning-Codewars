function longest(s1, s2) {
    let concatedStrings = s1+s2;
    let unRepeatedstring= "";
    for (let i = 0; i < concatedStrings.length; i++) {
        if (!unRepeatedstring.includes(concatedStrings[i])) {
            unRepeatedstring = unRepeatedstring+ concatedStrings[i] 
        }
    }

    return unRepeatedstring.split("").sort().join("");
  }
  console.log(longest( "loopingisfunbutdangerous", "lessdangerousthancoding"))