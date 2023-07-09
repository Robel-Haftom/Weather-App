import weatherData from './weather-data.js';

let retrivedArrayString = localStorage.getItem('weatheInfo');
 let retrivedArray = JSON.parse(retrivedArrayString);

let getWeatherInfo = document.getElementById("get-weather-button");
let display = document.querySelector('.lower');

getWeatherInfo.onclick = function (){
    render();
}

function render(){
    
    let cityName = document.getElementById("input-city-name").value.toLowerCase();

    let searchedCity = weatherData.filter(function   (mycity){
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
            <p class="weather-status">${eachCity.temprature} °C</p>
            <p class="weather-description">${eachCity.discription}</p>
        </div>
        <div class="weather-mathematical-discription">
            <div class="weather-desc">
                <p>Feels like:${eachCity.feels}</p>
            </div>
            <div class="weather-desc">
                <p>Humidity:${eachCity.humidity}</p>
            </div>
            <div class="weather-desc">
                <p>Wind Speed:${eachCity.windsSpeed}</p>
            </div>
        </div>
    </div>`;
} else{
    console.log("No such city is found");
}
}