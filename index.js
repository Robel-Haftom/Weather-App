import retrivedArray from './local-data.js';

let getWeatherInfo = document.getElementById("get-weather-button");
let display = document.querySelector('.lower');

getWeatherInfo.onclick = function (){
    render();
}

function render(){
    
    let cityName = document.getElementById("input-city-name").value.toLowerCase();

    let searchedCity = retrivedArray.filter(function   (mycity){
        return mycity.city == cityName;
    });

    let eachCity; 
    if(searchedCity.length == 0){
        display.innerHTML = `
        <p class="no-such-city">No such city found</p>
        `;
    } else{
    for(let index = 0; index < searchedCity.length; index++){
        eachCity = searchedCity[index];
    }
}
if(eachCity != undefined){
    display.innerHTML = `
        <div class="weather-whole-discription">
            <img src=${eachCity.image} class="weather-image">
            <p class="weather-status">${eachCity.temprature}°C</p>
            <p class="weather-description">${eachCity.discription}</p>
        </div>
        <div class="weather-mathematical-discription">
            <div class="weather-desc">
                <p>Feels like:</p><p>${eachCity.feels}°C</p>
            </div>
            <div class="weather-desc">
                <p>Humidity:</p><p>${eachCity.humidity}%</p>
            </div>
            <div class="weather-desc">
                <p>Windspeed:</p><p>${eachCity.windsSpeed}m/s</p>
            </div>
        </div>
    </div>`;
} else{
    console.log("No such city is found");
}
}