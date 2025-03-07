function mergeArrays(arr1, arr2) {

    const MergeArrays = arr1.concat(arr2);
    const SortedArrays = MergeArrays.sort(function (a,b) { return a -b });
    

    const UniqueArrays = [];
    SortedArrays.forEach(element => {
        if (!UniqueArrays.includes(element)) {
            UniqueArrays.push(element);
        }
    });
    return UniqueArrays ; 
    
}

 
        