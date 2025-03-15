function updateLight(current) {
    let trafficLight=["green","yellow","red","green"];
    let currentIndex = trafficLight.indexOf(current);
    return trafficLight[currentIndex + 1];
  
  }
  console.log(updateLight("red"));