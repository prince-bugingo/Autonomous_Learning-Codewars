function distinct(a) {
    let array=[];
    a.forEach(element => {
        if (!array.includes(element)) {
            array.push(element);
        }
    });
    return array;
  }






  