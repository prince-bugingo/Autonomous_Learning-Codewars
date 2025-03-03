const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    fuelLeft= fuelLeft*mpg;
    if (fuelLeft >= distanceToPump)
    {
        return true;
    }
    else
    {
        return false;
    }
  
};

