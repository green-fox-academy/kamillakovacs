'use script'

window.onload = () => {
  const table = document.querySelector('table');
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/planets`, true);

  http.onload = () => {  
    if (http.status === 200) {
      const planetinfo = JSON.parse(http.response);
      console.log(http.response)
      planetinfo.result.forEach(element => {
        const newTR = document.createElement('tr');
        const newPlanetName = document.createElement('td');
        const newPlanetPop = document.createElement('td');
        const spaceshipButton = document.createElement('button');
        table.appendChild(newTR);
        newTR.appendChild(newPlanetName);
        newTR.appendChild(newPlanetPop);
        newTR.appendChild(spaceshipButton);
        newPlanetName.textContent = element.name;
        newPlanetPop.textContent = element.population;
        spaceshipButton.textContent = `Move Here`;
    });
  }
}
  http.send();
}