// Tagging HTML elements
const myKeyAPI = "a1442ff4c1b174ffb5b28e15ebbafa8f";
const searchBtn = document.getElementById("#searchCity");
const cityInput = document.getElementById("#cityInput");
const locationName = document.getElementById("#locationName");
const searchHistory = document.getElementById("#searchHistory");
const temperature = document.getElementById("#temperature");
const wind = document.getElementById("#wind");
const humid = document.getElementById("#humid")
const uv = document.getElementById("#uv");
// 5-day forecast
const day1Date = document.getElementById("#day1Date");
const day2Date = document.getElementById("#day2Date");
const day3Date = document.getElementById("#day3Date");
const day4Date = document.getElementById("#day4Date");
const day5Date = document.getElementById("#day5Date");

const day1Icon = document.getElementById("#day1Icon");
const day2Icon = document.getElementById("#day2Icon");
const day3Icon = document.getElementById("#day3Icon");
const day4Icon = document.getElementById("#day4Icon");
const day5Icon = document.getElementById("#day5Icon");

const day1Temperature = document.getElementById("#day1Temperature");
const day2Temperature = document.getElementById("#day2Temperature");
const day3Temperature = document.getElementById("#day3Temperature");
const day4Temperature = document.getElementById("#day4Temperature");
const day5Temperature = document.getElementById("#day5Temperature");

const day1Wind = document.getElementById("#day1Wind");
const day2Wind = document.getElementById("#day2Wind");
const day3Wind = document.getElementById("#day3Wind");
const day4Wind = document.getElementById("#day4Wind");
const day5Wind = document.getElementById("#day5Wind");

const day1Humid = document.getElementById("#day1Humid");
const day2Humid = document.getElementById("#day2Humid");
const day3Humid = document.getElementById("#day3Humid");
const day4Humid = document.getElementById("#day4Humid");
const day5Humid = document.getElementById("#day5Humid");
// function
function getLocation(cityName) {
    const urlKey = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + myKeyAPI;

    fetch(urlKey).then(function(response) {
        response.json().then(function(data) {
            const cityLatitude = data.coordinate.lat;
            const cityLongitude = data.coordinate.lon;
            const coorUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + cityLatitude + "&lon=" + cityLongitude + "&appid=" + myKeyAPI;

            fetch(coorUrl).then(function(response) {
                response.json().then(function(data) {
                    console.log(data);
                    const weatherIcon = $("<img src='http://openweathermap.org/img/wn/10d@2x.png')
                })
            })
        })
    })
}