function parse(num)
{
 let parse = parseFloat(num);
 if (Number.isInteger(parse)) 
    { 
    return null;
 }
 else if (isNaN(parse)) {
    return null; 
 }

 return parse;
}