function findShort(s)
{
    let arr = s.split(" ");
    let arrWordsLenght=[];
    let short;
  arr.forEach(element => {
    arrWordsLenght.push(element.length);
    
  });

   let sortedArray=arrWordsLenght.sort((a,b)=> a-b);
   return arrWordsLenght[0];
}
console.log(findShort("Let's travel abroad shall we"))