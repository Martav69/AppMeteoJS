const CleAPI = '137bf9dbf9fd34650a9714cf29c91c30';
let resultAPI;
const temps = document.querySelector('.temps')
const temperature = document.querySelector('.temperature')
const localisation = document.querySelector('.localisation')

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        AppelAPI(long,lat);
    }, () => {
        alert("Vous avez refusé la géolocalisation, l'application ne peut pas fonctionner, veuillez l'activer !")
    })
}

function AppelAPI(long,lat) {

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=&timezone&daily=&hourly=temperature_2m&timezone=auto`)
    .then((reponse) =>  {
        return reponse.json();
    })
    .then((data)=> {

        console.log(data);

       // resultAPI =data;

      //  temps.innerText = resultAPI.current.weather[0].description;

    })
}