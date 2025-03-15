function isPalindrome(x) {
    let string= x.toLowerCase().split("").reverse().join("");
        if (string == x.toLowerCase()) {
      return true;   } else {return false;}
  }