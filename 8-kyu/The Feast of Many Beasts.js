function feast(beast, dish) {
    let arr1= beast.split("");
    let arr2= dish.split("");
    let lastaArr1Element = arr1.length-1;
    let lastaArr2Element = arr2.length-1;

    if (arr1[0]==arr2[0] &&  arr1[lastaArr1Element] == arr2[lastaArr2Element]) {

        return true;
    }
    else {
        return false;
    }
    }