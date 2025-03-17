function findSmallestInt(arr) {
    let sortedArr = arr.sort((a,b)=>a,b);
    return sortedArr[0];
  }
  console.log(findSmallestInt([78,56,232,12,8]));