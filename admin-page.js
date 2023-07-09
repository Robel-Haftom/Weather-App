import weatherData from './weather-data.js';

let cityName = document.getElementById("input-city-name-admin");
let weatherImage = document.getElementById("input-city-image-admin");
let temprature = document.getElementById("input-city-temprature-admin");
let weatherDiscription = document.getElementById("input-city-discription-admin");
let weatherFeelsLike = document.getElementById("input-city-feels-like-admin");
let weatherHumidity = document.getElementById("input-city-humidity-admin");
let weatherWindSpeed = document.getElementById("input-city-wind-speed-admin");

document.getElementById("register-button").onclick = function (){
    weatherData.push({
        city: cityName.value,
        image:"./images/cloud.png",
        temprature: temprature.value,
        discription: weatherDiscription.value,
        feels: weatherFeelsLike.value,
        humidity: weatherHumidity.value,
        windsSpeed: weatherWindSpeed.value,
        });
    let weatherOnlocalStorage = JSON.stringify(weatherData);
    localStorage.setItem('weatheInfo', weatherOnlocalStorage);
}

document.getElementById("cancel-button").onclick = function (){
}
