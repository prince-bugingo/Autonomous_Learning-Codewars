
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad 
// ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more
//  than 2 return 'I smell a series!'. If there are no good ideas, as is often the case,
//   return 'Fail!'.


  let x=['bad','bad','bad','good',,'good','good',];
  function well(x){
    let counter=0;
    for (let index=0; index<=x.length;index++)
    {
        if (index === 'good') {
            counter += counter;
        }

        
    }

    if (counter==1 || counter==2) {
        return 'Publish!';
    }
    else if (counter > 2) {
        return 'I smell a series!';
        
    }
    else return 'Fail!';``

  }

  console.log(well(x));