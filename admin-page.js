import weatherData from './weather-data.js';

let cityName = document.getElementById("input-city-name-admin");
let weatherImage = document.getElementById("input-city-image-admin");
let temprature = document.getElementById("input-city-temprature-admin");
let weatherDiscription = document.getElementById("input-city-discription-admin");
let weatherHumidity = document.getElementById("input-city-humidity-admin");
let weatherWindSpeed = document.getElementById("input-city-wind-speed-admin");

cityName.focus();

document.getElementById("register-button").onclick = function (){
    if(checkCity(cityName.value)){
        addCity(cityName);
        clearFields(cityName);
        addToLocalStorage(weatherData);
        listCities();
    } else{
        document.querySelector(".already-registerd").innerHTML = "The city is already registerd";
        listCities();
    }
}

document.getElementById("cancel-button").onclick = function (){
    cityName.value = "";
    cityName.focus();
    temprature.value = "0";
    weatherHumidity.value = "0";
    weatherWindSpeed.value = "0";
}

function checkCity(cityName){
    for(const element of weatherData){
        if(cityName == element.city){
            console.log("city is already registerd");
            return false;
        } 
    } 
    return true;
}

function addCity(cityName){
    weatherData.push({
        city: cityName.value.toLowerCase(),
        image:"./images/cloud.png",
        temprature: temprature.value,
        discription: weatherDiscription.value,
        humidity: weatherHumidity.value,
        windsSpeed: weatherWindSpeed.value,
        });
}

function clearFields(cityName){
    cityName.value = "";
    cityName.focus();
    temprature.value = "0";
    weatherHumidity.value = "0";
    weatherWindSpeed.value = "0";
}

function addToLocalStorage(weatherData){
    // let weatherOnlocalStorage = JSON.stringify(weatherData);
    // localStorage.setItem('weatheInfo', weatherOnlocalStorage);
    
    let existingData = localStorage.getItem('weatheInfo');
    let mergedData = [];
    
    if (existingData !== null) {
        mergedData = JSON.parse(existingData);
    }
    
    mergedData = mergedData.concat(weatherData);
    localStorage.setItem('weatheInfo', JSON.stringify(mergedData));
}

function listCities(){
    weatherData.forEach(element => {
        console.log(element.city);
    });
}