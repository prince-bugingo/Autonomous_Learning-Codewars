function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twicesonage= sonYearsOld*2;
  let dadsage= dadYearsOld-twicesonage;
    if(dadsage>0)
      {
        return dadsage;
      }
    else{
      return dadsage* (-1);
    }
  }
