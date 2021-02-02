const weather = document.querySelector(".js-weather");
const API_KEY = "85cc30a15fb710c78a4cb1d02e9298f2";
const COORDS = "coords";


function getWeather(lat, long){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
        )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSucces(position){
    //console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError(){
    console.log("Can't access geo location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}
function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);//string
    if(loadedCords ===null){
        askForCoords();
    }else{
        const parsedCoords=JSON.parse(loadedCords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
        console.log(parsedCoords);
    }
}

function init(){
    loadCoords();
}
init();