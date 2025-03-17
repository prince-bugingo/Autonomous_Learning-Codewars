function areYouPlayingBanjo(name) {
    array = name.split(" ");
    if (array[0] == "R" || array[0] == "r") {
        return ${`name + " plays banjo" `}
        
    }
    else {
        return name + " does not play banjo"
    }
     
  }

  console.log(areYouPlayingBanjo(Rayan));
