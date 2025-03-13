function printerError(s) 
{
    nToZ= "nopqrstuvwxyz";
    x = nToZ.split();
    count=0;
    arr=s.plit();
    arr.forEach(element => {
        if (element.includes(x)) {
            count += 1;
        }
    });
}






