import retrivedArray from './local-data.js';

let getWeatherInfo = document.querySelector("form");
let display = document.querySelector('.lower');

getWeatherInfo.addEventListener("submit",(event)=>{
   event.preventDefault();
   render();
   console.log(retrivedArray.length);
   retrivedArray.forEach(element => {
            console.log(element.city);
        });
});

function render(){
    
    let cityName = document.getElementById("input-city-name").value.toLowerCase();

    let searchedCity = retrivedArray.filter(function  (mycity){
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
                <p>Feels like:</p><p>${eachCity.temprature}°C</p>
            </div>
            <div class="weather-desc">
                <p>Humidity:</p><p>${eachCity.humidity}%</p>
            </div>
            <div class="weather-desc">
                <p>Wind:</p><p>${eachCity.windsSpeed} km/h</p>
            </div>
        </div>
    </div>`;
} else{
    console.log("No such city is found");
}
}