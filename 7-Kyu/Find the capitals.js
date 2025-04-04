var capitals = function (word) {
    let array=[];
	for (let i = 0; i <word.length; i++) {
         if (word[i] == word[i].toUpperCase() ) {
             array.push(i);
         }
    }
    return array;
};

console.log(capitals("PriN"));