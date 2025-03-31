
function frogContest(n) {
    let chris=0;
    let tom=0;
    let cat=0;
    let catate=0;
    tomate=0;

    for (let i = 0; i <=n; i++) {
        chris+= i;
    }

    tom= Math.floor(chris/2);
    for (let i = 0; i <=tom; i++) {
        tomate+= i;
    }
    cat=chris+tomate;
    for (let i = 0; i <=cat; i++) {
        catate+= i;
    }

    return `Chris ate ${chris} flies, Tom ate ${tomate} flies and Cat ate ${catate}  flies.`
  }
  console.log(frogContest(5));