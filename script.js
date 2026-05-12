function showCar(car){

  const data = {
    bugatti:"Bugatti Chiron: 1500HP hypercar with 420 km/h top speed.",
    gtr:"Nissan GT-R: Twin turbo legend known as Godzilla.",
    lambo:"Lamborghini Aventador: V12 beast with 770HP.",
    ferrari:"Ferrari SF90: Hybrid hypercar with futuristic tech."
  };

  document.getElementById("carInfo").innerHTML =
  `<h2>Car Info</h2><p>${data[car]}</p>`;
}

function toggleTheme(){
  document.body.classList.toggle("light-mode");
}
