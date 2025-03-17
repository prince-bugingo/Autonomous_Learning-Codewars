function friend(friends){
    let myFriends = [];
    friends.forEach(element => {
        if(element.length == 4){
            myFriends.push(element);
        }
    });

    return myFriends;
  }
  